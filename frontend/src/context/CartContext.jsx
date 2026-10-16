import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// Helper para determinar el mínimo, el paso (salto) y el texto según el producto
const getStepAndMin = (codigo = '', familyId = '') => {
  const cod = String(codigo).toUpperCase();
  const fam = String(familyId).toLowerCase();

  // 1. Accesorios de Aire Comprimido (AC) y Especiales (VNS, válvulas de alivio o familia)
  const codigosValvulas = ['1020', '1021', '1022', '1023', '1024', '1025'];
  if (
    cod.startsWith('AC') ||
    cod.startsWith('VNS') ||
    fam === 'especiales' ||
    codigosValvulas.includes(cod)
  ) {
    return { min: 1, step: 1, label: '' };
  }

  // 2. Cuplas Roscadas: Mínimo 200, pero permite sumar/restar de a 1 (201, 202, etc.)
  if (cod.startsWith('CR') || fam === 'cuplas') {
    return { min: 200, step: 1, label: 'Mínimo 200' };
  }

  // 3. Alemites (Pulgadas y Métricos): Mínimo 100 y múltiplos de 100
  return { min: 100, step: 100, label: 'Mín. / Múltiplos de 100' };
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('soltermann_quote_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('soltermann_quote_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    const { min, step } = getStepAndMin(product.codigo, product.familyId);

    setCartItems((prev) => {
      const existing = prev.find((item) => item.codigo === product.codigo);
      if (existing) {
        return prev.map((item) =>
          item.codigo === product.codigo
            ? { ...item, cantidad: (Number(item.cantidad) || min) + step }
            : item
        );
      }
      // Si es nuevo en el carrito, arranca con su cantidad mínima
      return [...prev, { ...product, cantidad: min, step, min }];
    });
  };

  const updateQuantity = (codigo, nuevaCantidad) => {
    // Si el usuario borró todo el número con Backspace, lo dejamos vacío temporalmente para que pueda escribir
    if (nuevaCantidad === '') {
      setCartItems((prev) =>
        prev.map((item) => (item.codigo === codigo ? { ...item, cantidad: '' } : item))
      );
      return;
    }

    const { min } = getStepAndMin(codigo);
    const parsed = parseInt(nuevaCantidad, 10);

    setCartItems((prev) =>
      prev.map((item) =>
        item.codigo === codigo
          ? { ...item, cantidad: isNaN(parsed) ? min : parsed }
          : item
      )
    );
  };

  const removeFromCart = (codigo) => {
    setCartItems((prev) => prev.filter((item) => item.codigo !== codigo));
  };

  const clearCart = () => setCartItems([]);

  // Cuenta total de líneas / productos únicos pedidos
  const totalItemsCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItemsCount,
        getStepAndMin,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);