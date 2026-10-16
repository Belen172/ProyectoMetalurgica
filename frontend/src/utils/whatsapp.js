export const getWhatsappProductUrl = (codigo, descripcion) => {
    const telefono = '5493492220724';
    const texto = `Hola, quiero consultar por el producto ${codigo} – ${descripcion} `;
    return `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
  };