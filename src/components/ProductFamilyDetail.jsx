import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table, Accordion } from 'react-bootstrap';
import { FaLayerGroup, FaCheck, FaDraftingCompass, FaFilePdf, FaExternalLinkAlt, FaWhatsapp } from 'react-icons/fa';
import { DoubleProductTable } from './DoubleProductTable';

export const allFamilies = [
  { id: 'alemites-pulgadas', title: 'Alemites Rosca en Pulgadas', color: '#2A2A58' },
  { id: 'alemites-metrica', title: 'Alemites Rosca Métrica', color: '#37418E' },
  { id: 'especiales', title: 'Especiales', color: '#9D2E35' },
  { id: 'cuplas', title: 'Cuplas Roscadas', color: '#EE353D' },
  { id: 'aire-comprimido', title: 'Aire Comprimido', color: '#009ADC' },
  { id: 'mecanizado-plano', title: 'Servicio de Mecanizado', color: '#F68B34' },
];

// Base de datos de productos por familia
const familiesDatabase = {
  // 1. ALEMITES ROSCA EN PULGADAS
  'alemites-pulgadas': {
    title: 'Alemites Rosca en Pulgadas',
    color: '#2A2A58',
    tipo: 'catalogo',
    pdf: '/catalogos/catalogo-alemites-pulgadas.pdf',
    subfamilias: [
      {
        nombre: 'Alemites y Tapones 1/4 SAE',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/1010.png', codigo: '1010', descripcion: '1/4 (SAE) NF Recto Corto' },
          { foto: '/productos/1010-1.png', codigo: '1010/1', descripcion: '1/4 (SAE) NF Recto Rosca 7 mm.' },
          { foto: '/productos/1012.png', codigo: '1012', descripcion: '1/4 (SAE) NF Recto Largo 19 mm.' },
          { foto: '/productos/1013.png', codigo: '1013', descripcion: '1/4 (SAE) NF Recto Extra Largo 31 mm.' },
          { foto: '/productos/1014-2.png', codigo: '1014/2', descripcion: '1/4 (SAE) NF Semi Curvo 45° Estándar' },
          { foto: '/productos/1014.png', codigo: '1014', descripcion: '1/4 (SAE) NF Semi Curvo 67° Estándar' },
          { foto: '/productos/1014-4.png', codigo: '1014/4', descripcion: '1/4 (SAE) NF Semi Curvo 45° Liviano' },
          { foto: '/productos/1014-3.png', codigo: '1014/3', descripcion: '1/4 (SAE) NF Semi Curvo 67° Liviano' },
          { foto: '/productos/1015.png', codigo: '1015', descripcion: '1/4 (SAE) NF Curvo 90° Estándar' },
          { foto: '/productos/1015-2.png', codigo: '1015/2', descripcion: '1/4 (SAE) NF Curvo 90° Liviano' },
          { foto: '/productos/E10101.png', codigo: 'E10101', descripcion: '1/4 (SAE) NF Semi Curvo 45° Doble Boca' },
          { foto: '/productos/1011.png', codigo: '1011', descripcion: 'Tapones 1/4 (SAE) NF' }
        ]
      },
      {
        nombre: 'Alemites y Tapones 1/8 BSP (GAS)',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/1130.png', codigo: '1130', descripcion: '1/8 BSP (GAS) Recto Corto' },
          { foto: '/productos/1131.png', codigo: '1131', descripcion: '1/8 BSP (GAS) Recto Extra Largo 38 mm.' },
          { foto: '/productos/1131-6.png', codigo: '1131-6', descripcion: '1/8 BSP (GAS) Recto Extra Largo 31 mm.' },
          { foto: '/productos/1132-2.png', codigo: '1132-2', descripcion: '1/8 BSP (GAS) Semi Curvo 45° Estándar' },
          { foto: '/productos/1132.png', codigo: '1132', descripcion: '1/8 BSP (GAS) Semi Curvo 67° Estándar' },
          { foto: '/productos/1132-3.png', codigo: '1132-3', descripcion: '1/8 BSP (GAS) Semi Curvo 45° Liviano' },
          { foto: '/productos/1132-4.png', codigo: '1132-4', descripcion: '1/8 BSP (GAS) Semi Curvo 67° Liviano' },
          { foto: '/productos/1133.png', codigo: '1133', descripcion: '1/8 BSP (GAS) Curvo 90° Estándar' },
          { foto: '/productos/1133-2.png', codigo: '1133-2', descripcion: '1/8 BSP (GAS) Curvo 90° Liviano' },
          { foto: '/productos/E10102.png', codigo: 'E10102', descripcion: '1/8 BSP (GAS) Semi Curvo 45° Doble Boca' },
          { foto: '/productos/1134.png', codigo: '1134', descripcion: 'Tapones 1/8 BSP (GAS)' }
        ]
      },
      {
        nombre: 'Alemites y Tapones 1/4 BSP (GAS)',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/1250.png', codigo: '1250', descripcion: '1/4 BSP (GAS) Recto' },
          { foto: '/productos/1251-2.png', codigo: '1251-2', descripcion: '1/4 BSP (GAS) Semi Curvo 45°' },
          { foto: '/productos/1251.png', codigo: '1251', descripcion: '1/4 BSP (GAS) Semi Curvo 67°' },
          { foto: '/productos/1252.png', codigo: '1252', descripcion: '1/4 BSP (GAS) Curvo 90°' },
          { foto: '/productos/1253.png', codigo: '1253', descripcion: 'Tapones 1/4 BSP (GAS)' }
        ]  
      }
    ]
  },

  // 2. ALEMITES ROSCA MÉTRICA
  'alemites-metrica': {
    title: 'Alemites Rosca Métrica',
    color: '#37418E',
    tipo: 'catalogo',
    pdf: '/catalogos/catalogo-alemites-metrica.pdf',
    subfamilias: [
      {
        nombre: 'Alemites y Tapones M6x1',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/1550.png', codigo: '1550', descripcion: 'M6x1 Recto' },
          { foto: '/productos/1551.png', codigo: '1551', descripcion: 'M6x1 Curvo 90°' },
          { foto: '/productos/1552-2.png', codigo: '1552/2', descripcion: 'M6x1 Semi Curvo 45°' },
          { foto: '/productos/1552.png', codigo: '1552', descripcion: 'M6x1 Semi Curvo 67°' },
          { foto: '/productos/1550-2.png', codigo: '1550/2', descripcion: 'Tapones M6x1' }
        ]
      },
      {
        nombre: 'Alemites y Tapones M8x1',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/1553.png', codigo: '1553', descripcion: 'M8x1 Recto' },
          { foto: '/productos/1554.png', codigo: '1554', descripcion: 'M8x1 Curvo 90°' },
          { foto: '/productos/1555-2.png', codigo: '1555/2', descripcion: 'M8x1 Semi Curvo 45°' },
          { foto: '/productos/1555.png', codigo: '1555', descripcion: 'M8x1 Semi Curvo 67°' },
          { foto: '/productos/1553-2.png', codigo: '1553/2', descripcion: 'Tapones M8x1' }
        ]
      },
      {
        nombre: 'Alemites y Tapones M8x1,25',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/1556.png', codigo: '1556', descripcion: 'M8x1,25 Recto' },
          { foto: '/productos/1557.png', codigo: '1557', descripcion: 'M8x1,25 Curvo 90°' },
          { foto: '/productos/1558-2.png', codigo: '1558/2', descripcion: 'M8x1,25 Semi Curvo 45°' },
          { foto: '/productos/1558.png', codigo: '1558', descripcion: 'M8x1,25 Semi Curvo 67°' },
          { foto: '/productos/1556-2.png', codigo: '1556/2', descripcion: 'Tapones M8x1,25' }
        ]
      },
      {
        nombre: 'Alemites y Tapones M10x1',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/1559.png', codigo: '1559', descripcion: 'M10x1 Recto' },
          { foto: '/productos/1560.png', codigo: '1560', descripcion: 'M10x1 Curvo 90°' },
          { foto: '/productos/1561-2.png', codigo: '1561/2', descripcion: 'M10x1 Semi Curvo 45°' },
          { foto: '/productos/1561.png', codigo: '1561', descripcion: 'M10x1 Semi Curvo 67°' },
          { foto: '/productos/1561-3.png', codigo: '1561/3', descripcion: 'M10x1 Semi Curvo 45° Doble boca' },
          { foto: '/productos/1559-2.png', codigo: '1559/2', descripcion: 'Tapones M10x1' }
        ]
      },
      {
        nombre: 'Alemites y Tapones M10x1,25',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/1562.png', codigo: '1562', descripcion: 'M10x1,25 Recto' },
          { foto: '/productos/1563.png', codigo: '1563', descripcion: 'M10x1,25 Curvo 90°' },
          { foto: '/productos/1564-2.png', codigo: '1564/2', descripcion: 'M10x1,25 Semi Curvo 45°' },
          { foto: '/productos/1564.png', codigo: '1564', descripcion: 'M10x1,25 Semi Curvo 67°' },
          { foto: '/productos/1562-2.png', codigo: '1562/2', descripcion: 'Tapones M10x1,25' }
        ]
      }
    ]
  },

  // 3. CUPLAS ROSCADAS 
  'cuplas': {
    title: 'Cuplas Roscadas',
    color: '#EE353D',
    tipo: 'cuplas',
    pdf: '/catalogos/catalogo-cuplas.pdf',
    subfamilias: [
      {
        nombre: 'Cuplas - Rosca en pulgadas',
        productos: [
          { denominacion: 'Cupla roscada 1/4', codigo: 'CR001', diametroH: '9,52', rosca: 'W 1/4" x 20', largo: '22' },
          { denominacion: 'Cupla roscada 5/16', codigo: 'CR002', diametroH: '12,7', rosca: 'W 5/16" x 18', largo: '25' },
          { denominacion: 'Cupla roscada 3/8', codigo: 'CR003', diametroH: '14', rosca: 'W 3/8" x 16', largo: '28,5' },
          { denominacion: 'Cupla roscada 3/8', codigo: 'CR004', diametroH: '14', rosca: 'W 3/8" x 16', largo: '45' },
          { denominacion: 'Cupla roscada 7/16', codigo: 'CR005', diametroH: '16', rosca: 'W 7/16" x 14', largo: '50' },
          { denominacion: 'Cupla roscada 7/16 pesada', codigo: 'CR006', diametroH: '17', rosca: 'W 7/16" x 14', largo: '50' },
          { denominacion: 'Cupla roscada 1/2 liviana', codigo: 'CR007', diametroH: '17', rosca: 'W 1/2" x 12', largo: '50' },
          { denominacion: 'Cupla roscada 1/2 pesada', codigo: 'CR008', diametroH: '19', rosca: 'W 1/2" x 12', largo: '50' }
        ]
      },
      {
        nombre: 'Cuplas - Reducción / Especiales',
        productos: [
          { denominacion: 'Cupla roscada 3/8 Larga', codigo: 'CR009', diametroH: '14', rosca: 'W 3/8" x 16', largo: '80' },
          { denominacion: 'Cupla roscada 7/16 - 3/8 Reducción', codigo: 'CR010', diametroH: '17', rosca: 'W 7/16" x 14 / W 3/8" x 16', largo: '50' },
          { denominacion: 'Cupla roscada 7/16 Larga', codigo: 'CR011', diametroH: '17', rosca: 'W 7/16" x 14', largo: '80' },
          { denominacion: 'Cupla roscada 1/2 - 7/16 Reducción', codigo: 'CR012', diametroH: '19 o 19.03', rosca: 'W 1/2" x 12 / W 7/16" x 14', largo: '50' },
          { denominacion: 'Cupla roscada 1/2 Larga', codigo: 'CR013', diametroH: '19 o 19.03', rosca: 'W 1/2" x 12', largo: '80' },
          { denominacion: 'Cupla roscada 5/8 Reforzada', codigo: 'CR014', diametroH: '22', rosca: 'W 5/8" x 11', largo: '60' },
          { denominacion: 'Cupla roscada 5/8 - 1/2 Reducción', codigo: 'CR015', diametroH: '22', rosca: 'W 5/8" x 11 / W 1/2" x 12', largo: '60' },
          { denominacion: 'Cupla roscada 5/8 Larga', codigo: 'CR016', diametroH: '22', rosca: 'W 5/8" x 11', largo: '80' }
        ]
      }
    ]
  },

  // 4. ALEMITES ESPECIALES
  'especiales': {
    title: 'Especiales',
    color: '#9D2E35',
    tipo: 'catalogo',
    pdf: '/catalogos/catalogo-alemites-especiales.pdf',
    subfamilias: [
      {
        nombre: 'Válvulas de Alivio (respiro)',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/1020.png', codigo: '1020', descripcion: '1/8 BSP (GAS) con sombrero - con resorte' },
          { foto: '/productos/1021.png', codigo: '1021', descripcion: '1/8 BSP (GAS) con sombrero - sin resorte' },
          { foto: '/productos/1022.png', codigo: '1022', descripcion: '1/8 BSP (GAS) sin sombrero - con resorte' },
          { foto: '/productos/1023.png', codigo: '1023', descripcion: '1/8 BSP (GAS) sin sombrero - sin resorte' },
          { foto: '/productos/1024.png', codigo: '1024', descripcion: '3/8 BSP (GAS) con sombrero - sin resorte' },
          { foto: '/productos/1025.png', codigo: '1025', descripcion: '1/4 BSP (GAS) con sombrero - sin resorte' }
        ]
      },
      {
        nombre: 'Visores de Nivel',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/VNS14.png', codigo: 'VNS14', descripcion: 'Rosca 1/4" BSP (GAS) - Cuerpo Aluminio' },
          { foto: '/productos/VNS38.png', codigo: 'VNS38', descripcion: 'Rosca 3/8" BSP (GAS) - Cuerpo Aluminio' },
          { foto: '/productos/VNS12.png', codigo: 'VNS12', descripcion: 'Rosca 1/2" BSP (GAS) - Cuerpo Aluminio' },
          { foto: '/productos/VNS34.png', codigo: 'VNS34', descripcion: 'Rosca 3/4" BSP (GAS) - Cuerpo Aluminio' },
          { foto: '/productos/VNS01.png', codigo: 'VNS01', descripcion: 'Rosca 1" BSP (GAS) - Cuerpo Aluminio' }
        ]
      }
    ]
  },

  // 5. SERVICIO MECANIZADO SEGÚN PLANO
  'mecanizado-plano': {
    title: 'Servicio de Mecanizado',
    color: '#F68B34',
    tipo: 'servicio',
    pdf: '/catalogos/ficha-mecanizado-cnc.pdf',
    contenido: {
      titulo: 'Tornería Automática y Mecanizado CNC',
      subtitulo: 'SOLUCIONES A MEDIDA SEGÚN PLANO',
      puntos: [
        {
          titulo: 'Cotización de piezas a medida',
          detalle: 'Desarrollo y fabricación adaptados 100% al requerimiento técnico del cliente.'
        },
        {
          titulo: 'Tornería automática',
          detalle: 'Con pasaje de barras de 25 mm. y 42 mm.'
        },
        {
          titulo: 'Tornería CNC',
          detalle: 'Con pasaje de barras de 52 mm., diámetro de volteo 260 mm. y largo 380 mm.'
        }
      ],
      garantia: {
        item1: 'Calidad garantizada en cada proyecto',
        item2: 'Precisión, tecnología y compromiso para la industria'
      }
    }
  },

  // 6. AIRE COMPRIMIDO
  'aire-comprimido': {
    title: 'Aire Comprimido',
    color: '#009ADC',
    tipo: 'catalogo',
    pdf: '/catalogos/catalogo-aire-comprimido.pdf',
    subfamilias: [
      {
        nombre: 'Conector Rápido macho para manguera',
        columnas: ['Producto', 'Código', 'Descripción', 'Compatibilidad'],
        productos: [
          { foto: '/productos/AC10-001.png', codigo: 'AC10-001', descripcion: '1/4" (6,35 mm)', compatibilidad: 'Compatible con acople rápido 1/4 BSP' },
          { foto: '/productos/AC10-002.png', codigo: 'AC10-002', descripcion: '5/16" (7,94 mm)', compatibilidad: 'Compatible con acople rápido 1/4 BSP' },
          { foto: '/productos/AC10-003.png', codigo: 'AC10-003', descripcion: '3/8" (9,52 mm)', compatibilidad: 'Compatible con acople rápido 1/4 BSP' },
          { foto: '/productos/AC10-004.png', codigo: 'AC10-004', descripcion: '1/2" (12,7 mm)', compatibilidad: 'Compatible con acople rápido 1/4 BSP' },
          { foto: '/productos/AC10-005.png', codigo: 'AC10-005', descripcion: '5/8" (15,88 mm)', compatibilidad: 'Compatible con acople rápido 3/8 BSP' },
          { foto: '/productos/AC10-006.png', codigo: 'AC10-006', descripcion: '3/4" (19,01 mm)', compatibilidad: 'Compatible con acople rápido 3/8 BSP' },
          { foto: '/productos/AC10-007.png', codigo: 'AC10-007', descripcion: '5/8" (15,88 mm)', compatibilidad: 'Compatible con acople rápido 1/2 BSP' },
          { foto: '/productos/AC10-008.png', codigo: 'AC10-008', descripcion: '3/4" (19,01 mm)', compatibilidad: 'Compatible con acople rápido 1/2 BSP' }
        ]
      },
      {
        nombre: 'Conector Rápido macho con rosca hembra',
        columnas: ['Producto', 'Código', 'Descripción', 'Compatibilidad'],
        productos: [
          { foto: '/productos/AC20-001.png', codigo: 'AC20-001', descripcion: '1/8 BSP (GAS)', compatibilidad: 'Compatible con acople rápido 1/4 BSP' },
          { foto: '/productos/AC20-002.png', codigo: 'AC20-002', descripcion: '1/4 BSP (GAS)', compatibilidad: 'Compatible con acople rápido 1/4 BSP' },
          { foto: '/productos/AC20-003.png', codigo: 'AC20-003', descripcion: '3/8 BSP (GAS)', compatibilidad: 'Compatible con acople rápido 1/4 BSP' },
          { foto: '/productos/AC20-004.png', codigo: 'AC20-004', descripcion: '1/2 BSP (GAS)', compatibilidad: 'Compatible con acople rápido 1/4 BSP' }
        ]
      },
      {
        nombre: 'Conector Rápido macho con rosca macho',
        columnas: ['Producto', 'Código', 'Descripción', 'Compatibilidad'],
        productos: [
          { foto: '/productos/AC30-001.png', codigo: 'AC30-001', descripcion: '1/8 BSP (GAS)', compatibilidad: 'Compatible con acople rápido 1/4 BSP' },
          { foto: '/productos/AC30-002.png', codigo: 'AC30-002', descripcion: '1/4 BSP (GAS)', compatibilidad: 'Compatible con acople rápido 1/4 BSP' },
          { foto: '/productos/AC30-003.png', codigo: 'AC30-003', descripcion: '3/8 BSP (GAS)', compatibilidad: 'Compatible con acople rápido 1/4 BSP' },
          { foto: '/productos/AC30-004.png', codigo: 'AC30-004', descripcion: '1/2 BSP (GAS)', compatibilidad: 'Compatible con acople rápido 1/4 BSP' }
        ]
      },
      {
        nombre: 'Conector Rápido macho',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/AC40-001.png', codigo: 'AC40-001', descripcion: 'Con rosca hembra 5/16 UNF' }
        ]
      },
      {
        nombre: 'Racord con rosca hembra',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/AC50-001.png', codigo: 'AC50-001', descripcion: '1/4" (6,35 mm) con rosca hembra 1/4 BSP (GAS)' },
          { foto: '/productos/AC50-002.png', codigo: 'AC50-002', descripcion: '5/16" (7,94 mm) con rosca hembra 1/4 BSP (GAS)' },
          { foto: '/productos/AC50-003.png', codigo: 'AC50-003', descripcion: '3/8" (9,52 mm) con rosca hembra 1/4 BSP (GAS)' },
          { foto: '/productos/AC50-004.png', codigo: 'AC50-004', descripcion: '1/2" (12,7 mm) con rosca hembra 1/4 BSP (GAS)' },
          { foto: '/productos/AC50-005.png', codigo: 'AC50-005', descripcion: '3/8" (9,52 mm) con rosca hembra 3/8 BSP (GAS)' },
          { foto: '/productos/AC50-006.png', codigo: 'AC50-006', descripcion: '1/2" (12,7 mm) con rosca hembra 3/8 BSP (GAS)' },
          { foto: '/productos/AC50-007.png', codigo: 'AC50-007', descripcion: '3/8" (9,52 mm) con rosca hembra 1/2 BSP (GAS)' },
          { foto: '/productos/AC50-008.png', codigo: 'AC50-008', descripcion: '1/2" (12,7 mm) con rosca hembra 1/2 BSP (GAS)' }
        ]
      },
      {
        nombre: 'Racord con rosca macho',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/AC60-001.png', codigo: 'AC60-001', descripcion: '1/4" (6,35 mm) con rosca macho 1/4 BSP (GAS)' },
          { foto: '/productos/AC60-002.png', codigo: 'AC60-002', descripcion: '5/16" (7,94 mm) con rosca macho 1/4 BSP (GAS)' },
          { foto: '/productos/AC60-003.png', codigo: 'AC60-003', descripcion: '3/8" (9,52 mm) con rosca macho 1/4 BSP (GAS)' },
          { foto: '/productos/AC60-004.png', codigo: 'AC60-004', descripcion: '1/2" (12,7 mm) con rosca macho 1/4 BSP (GAS)' },
          { foto: '/productos/AC60-005.png', codigo: 'AC60-005', descripcion: '3/8" (9,52 mm) con rosca macho 3/8 BSP (GAS)' },
          { foto: '/productos/AC60-006.png', codigo: 'AC60-006', descripcion: '1/2" (12,7 mm) con rosca macho 3/8 BSP (GAS)' },
          { foto: '/productos/AC60-007.png', codigo: 'AC60-008', descripcion: '3/8" (9,52 mm) con rosca macho 1/2 BSP (GAS)' },
          { foto: '/productos/AC60-008.png', codigo: 'AC60-008', descripcion: '1/2" (12,7 mm) con rosca macho 1/2 BSP (GAS)' }
        ]
      },
      {
        nombre: 'Racord doble',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/AC70-001.png', codigo: 'AC70-001', descripcion: '1/4" (6,35 mm)' },
          { foto: '/productos/AC70-002.png', codigo: 'AC70-002', descripcion: '5/16" (7,94 mm)' },
          { foto: '/productos/AC70-003.png', codigo: 'AC70-003', descripcion: '3/8" (9,54 mm)' },
          { foto: '/productos/AC70-004.png', codigo: 'AC70-004', descripcion: '1/2" (12,7 mm)' }
        ]
      },
      {
        nombre: 'Racord triple',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/AC80-001.png', codigo: 'AC80-001', descripcion: '1/4" (6,35 mm)' },
          { foto: '/productos/AC80-002.png', codigo: 'AC80-002', descripcion: '5/16" (7,94 mm)' },
          { foto: '/productos/AC80-003.png', codigo: 'AC80-003', descripcion: '3/8" (9,54 mm)' },
          { foto: '/productos/AC80-004.png', codigo: 'AC80-004', descripcion: '1/2" (12,7 mm)' }
        ]
      },
      {
        nombre: 'Cupla Roscada',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/AC90-001.png', codigo: 'AC90-001', descripcion: '1/8 BSP (GAS) Longitud total 26 mm. Hexagonal 1/2"' },
          { foto: '/productos/AC90-002.png', codigo: 'AC90-002', descripcion: '1/4 BSP (GAS) Longitud total 25 mm. Hexagonal 5/8"' }
        ]
      },
      {
        nombre: 'Acople rápido con rosca hembra',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/AC100-001.png', codigo: 'AC100-001', descripcion: '1/4 BSP (GAS)' },
          { foto: '/productos/AC100-002.png', codigo: 'AC100-002', descripcion: '3/8 BSP (GAS)' },
          { foto: '/productos/AC100-003.png', codigo: 'AC100-003', descripcion: '1/2 BSP (GAS)' },
          { foto: '/productos/AC100-004.png', codigo: 'AC100-004', descripcion: 'Conjunto Acople + Conector macho 1/4 BSP (GAS)' },
          { foto: '/productos/AC100-005.png', codigo: 'AC100-005', descripcion: 'Conjunto Acople + Conector macho 3/8 BSP (GAS)' },
          { foto: '/productos/AC100-006.png', codigo: 'AC100-006', descripcion: 'Conjunto Acople + Conector macho 1/2 BSP (GAS)' }
        ]
      },
      {
        nombre: 'Acople rápido con rosca macho',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/AC110-001.png', codigo: 'AC110-001', descripcion: '1/4 BSP (GAS)' },
          { foto: '/productos/AC110-002.png', codigo: 'AC110-002', descripcion: '3/8 BSP (GAS)' },
          { foto: '/productos/AC110-003.png', codigo: 'AC110-003', descripcion: '1/2 BSP (GAS)' },
          { foto: '/productos/AC110-004.png', codigo: 'AC110-004', descripcion: 'Conjunto Acople + Conector macho 1/4 BSP (GAS)' },
          { foto: '/productos/AC110-005.png', codigo: 'AC110-005', descripcion: 'Conjunto Acople + Conector macho 3/8 BSP (GAS)' },
          { foto: '/productos/AC110-006.png', codigo: 'AC110-006', descripcion: 'Conjunto Acople + Conector macho 1/2 BSP (GAS)' }
        ]
      },
      {
        nombre: 'Pico Inflador Dual',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/AC120-001.png', codigo: 'AC120-001', descripcion: 'Con conector rápido macho' },
          { foto: '/productos/AC120-002.png', codigo: 'AC120-002', descripcion: 'Con rosca hembra 1/4 BSP (GAS)' },
          { foto: '/productos/AC120-003.png', codigo: 'AC120-003', descripcion: 'Con conector de manguera 6 mm.' }
        ]
      },
      {
        nombre: 'Pico Inflador para conector rápido',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/AC130-001.png', codigo: 'AC130-001', descripcion: 'Con conector rápido macho' }
        ]
      },
      {
        nombre: 'Racord a palanca - Adaptador Racord',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/AC140-001.png', codigo: 'AC140-001', descripcion: 'Racord - Con conector de manguera 6 mm.' },
          { foto: '/productos/0902.png', codigo: '0902', descripcion: 'Adaptador Racord' }
        ]
      },
      {
        nombre: 'Conector Michelin con racord',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/AC150-001.png', codigo: 'AC150-001', descripcion: 'Con conector de manguera 6 mm.' },
          { foto: '/productos/AC150-002.png', codigo: 'AC150-002', descripcion: 'Con conector de manguera 8 mm.' }
        ]
      },
      {
        nombre: 'Terraja para gomero',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/AC160-001.png', codigo: 'AC160-001', descripcion: 'Reparación de válvula de cuatro vías' }
        ]
      },
      {
        nombre: 'Pistola de aire',
        columnas: ['Producto', 'Código', 'Descripción'],
        productos: [
          { foto: '/productos/AC170-001.png', codigo: 'AC170-001', descripcion: 'Con boquilla corta' },
          { foto: '/productos/AC170-002.png', codigo: 'AC170-002', descripcion: 'Con boquilla larga' }
        ]
      }
    ]
  }
};

export const ProductFamilyDetail = () => {
  const { familyId } = useParams();
  const navigate = useNavigate();

  const currentId = familyId || 'alemites-pulgadas';
  const currentFamily = familiesDatabase[currentId] || familiesDatabase['alemites-pulgadas'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentId]);

  return (
    <div className="products-page-container">
      <section className="bg-light min-vh-100 pb-4">
        
        {/* BLOQUE STICKY COMPLETO CON FONDO BLANCO Y MARGEN DE CONTENCIÓN */}
        <div 
          className="bg-white shadow-sm w-100" 
          style={{ 
            position: 'sticky', 
            top: 0,                   /* Se pega al techo de la pantalla */
            zIndex: 1025,
            backgroundColor: '#ffffff',
            paddingTop: '115px'        /* Da el espacio exacto para que el Navbar flote encima sin tapar el título */
          }}
        >
          <Container fluid className="px-4 px-md-5 pt-2 pb-3">
            
            {/* ENCABEZADO "PRODUCTOS" CON LÍNEA ROJA FIJA */}
            <div className="mb-3 text-start">
              <div 
                style={{ 
                  width: '45px', 
                  height: '4px', 
                  backgroundColor: '#e63946', 
                  borderRadius: '2px',
                  display: 'block',
                  marginBottom: '10px'
                }} 
              />
              <h2 
                className="display-5 fw-bold text-uppercase mb-0"
                style={{
                  color: '#1e2044',
                  fontWeight: '800',
                  letterSpacing: '0.5px'
                }}
              >
                Productos
              </h2>
            </div>

            {/* GRILLA DE LAS 6 FAMILIAS */}
            <Row className="g-3 g-xl-4 row-cols-2 row-cols-md-3 row-cols-lg-6 align-items-center m-0">
              {allFamilies.map((family) => {
                const isActive = family.id === currentId;
                return (
                  <Col key={family.id} className="d-flex p-1">
                    <button
                      type="button"
                      onClick={() => navigate(`/productos/${family.id}`)}
                      className={`product-family-card w-100 ${isActive ? 'active' : 'inactive'}`}
                      style={{ 
                        backgroundColor: family.color,
                        border: 'none',
                        textDecoration: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <div className="product-family-title text-start">
                        {family.title}
                      </div>
                      <div className="product-family-line" />
                    </button>
                  </Col>
                );
              })}
            </Row>

          </Container>
        </div>

        {/* ========================================================
            CONTENIDO SCROLLEABLE (TÍTULO ACTIVO + TABLAS)
           ======================================================== */}
        <Container fluid className="px-4 px-md-5 py-4">

          {/* TÍTULO DE FAMILIA ACTIVA + BOTÓN DE DESCARGA PDF */}
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
            <div className="d-flex align-items-center gap-3">
              <div 
                className="rounded-circle p-2 d-flex align-items-center justify-content-center text-white flex-shrink-0" 
                style={{ backgroundColor: currentFamily.color, width: '42px', height: '42px' }}
              >
                <FaLayerGroup size={20} />
              </div>
              <h3 className="fw-black text-uppercase mb-0" style={{ color: 'var(--azul-ultramar)', letterSpacing: '0.5px' }}>
                {currentFamily.title}
              </h3>
            </div>

            {currentFamily.pdf && (
              <a
                href={currentFamily.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-catalogo-compacto"
                style={{ borderTopColor: currentFamily.color }}
              >
                <FaFilePdf size={16} style={{ color: 'var(--rojo-principal)' }} />
                <span>Descargar Catálogo {currentFamily.title}</span>
                <FaExternalLinkAlt size={11} className="ms-1 opacity-75" />
              </a>
            )}
          </div>

          {/* RENDERIZADO DINÁMICO */}

          {/* CASO 1: VISTA DE SERVICIO DE MECANIZADO CNC */}
          {currentFamily.tipo === 'servicio' && (
            <div className="d-flex flex-column gap-4">
              
              {/* BLOQUE PRINCIPAL: PRESENTACIÓN + VIDEO + TARJETAS + CONTACTO */}
              <div className="bg-white rounded-3 p-4 p-md-5 border shadow-sm text-start">
                <Row className="align-items-start g-4 g-lg-5">
                  
                  {/* Columna Izquierda: Título, Puntos y los 2 Rectángulos */}
                  <Col lg={7} className="text-start">
                    
                    {/* Badge Naranja */}
                    <span 
                      className="badge text-white px-3 py-2 mb-3 fw-bold text-uppercase d-inline-block"
                      style={{ backgroundColor: currentFamily.color || '#E85D04', fontSize: '0.8rem', letterSpacing: '0.5px' }}
                    >
                      {currentFamily.contenido.subtitulo}
                    </span>
                    
                    {/* Título Principal en color negro */}
                    <h2 
                      className="fw-bold mb-4 text-start text-dark" 
                      style={{ 
                        fontWeight: '800', 
                        fontSize: '1.85rem', 
                        letterSpacing: '-0.3px' 
                      }}
                    >
                      {currentFamily.contenido.titulo}
                    </h2>
                    
                    {/* Lista de características con títulos en color Naranja */}
                    <div className="d-flex flex-column gap-3 mb-4">
                      {currentFamily.contenido.puntos.map((punto, pIdx) => (
                        <div key={pIdx} className="text-start">
                          <h6 
                            className="fw-bold mb-1" 
                            style={{ fontSize: '1rem', color: currentFamily.color || '#E85D04' }}
                          >
                            {punto.titulo}
                          </h6>
                          <p className="text-secondary mb-0 small" style={{ fontSize: '0.88rem' }}>
                            {punto.detalle}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Tarjetas Institucionales (Movidas a la izquierda) */}
                    <div className="pt-2 mt-4">
                      <Row className="g-3">
                        {/* Tarjeta 1 */}
                        <Col xs={12} sm={6}>
                          <div 
                            className="p-3 bg-white rounded shadow-sm h-100 d-flex flex-column justify-content-center"
                            style={{ 
                              border: '1px solid #dee2e6',
                              borderLeft: `5px solid ${currentFamily.color || '#E85D04'}`
                            }}
                          >
                            <span 
                              className="fw-bold text-uppercase d-block mb-1" 
                              style={{ color: currentFamily.color || '#E85D04', fontSize: '0.78rem', letterSpacing: '0.4px' }}
                            >
                              Calidad Garantizada
                            </span>
                            <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.88rem', fontWeight: '800' }}>
                              EN CADA PROYECTO
                            </h6>
                          </div>
                        </Col>

                        {/* Tarjeta 2 */}
                        <Col xs={12} sm={6}>
                          <div 
                            className="p-3 bg-white rounded shadow-sm h-100 d-flex flex-column justify-content-center"
                            style={{ 
                              border: '1px solid #dee2e6',
                              borderLeft: `5px solid ${currentFamily.color || '#E85D04'}`
                            }}
                          >
                            <span 
                              className="fw-bold text-uppercase d-block mb-1" 
                              style={{ color: currentFamily.color || '#E85D04', fontSize: '0.75rem', letterSpacing: '0.3px' }}
                            >
                              Precisión, Tecnología y Compromiso
                            </span>
                            <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.82rem', fontWeight: '800' }}>
                              PARA LA INDUSTRIA
                            </h6>
                          </div>
                        </Col>
                      </Row>
                    </div>

                  </Col>

                  {/* Columna Derecha: Video + Botón de WhatsApp debajo */}
                  <Col lg={5} className="text-start">
                    <div className="d-flex flex-column gap-3">
                      
                      {/* Reproductor de Video */}
                      <div className="p-3 bg-light rounded-3 border shadow-sm">
                        <div 
                          className="rounded overflow-hidden shadow-sm bg-dark d-flex align-items-center justify-content-center"
                          style={{ minHeight: '230px' }}
                        >
                          <video 
                            src="/productos/video-cnc.mp4" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }}
                          >
                            Tu navegador no soporta la reproducción de video.
                          </video>
                        </div>
                      </div>

                      {/* Botón WhatsApp (Movido debajo del video) */}
                      <div className="w-100">
                        <a
                          href="https://wa.me/5493492419267?text=Hola,%20quisiera%20enviar%20un%20plano%20para%20cotizaci%C3%B3n%20de%20mecanizado."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn d-flex align-items-center justify-content-center gap-2 py-2 px-3 text-white fw-bold shadow-sm w-100"
                          style={{ 
                            backgroundColor: '#25D366', 
                            borderRadius: '8px', 
                            fontSize: '0.92rem', 
                            letterSpacing: '0.3px', 
                            border: 'none' 
                          }}
                        >
                          <FaWhatsapp size={20} />
                          <span>Enviar plano para cotización</span>
                        </a>
                      </div>

                    </div>
                  </Col>

                </Row>
              </div>

              {/* BLOQUE DE PREGUNTAS FRECUENTES (FAQ) ACORDEÓN */}
              <div className="bg-white rounded-3 p-4 p-md-5 border shadow-sm text-start">
                
                {/* Título centrado con línea decorativa */}
                <div className="text-center mb-4">
                  <h3 className="fw-bold mb-2" style={{ color: 'var(--azul-ultramar, #1e2044)' }}>
                    Preguntas Frecuentes sobre Mecanizado
                  </h3>
                  <div 
                    style={{ 
                      width: '50px', 
                      height: '4px', 
                      backgroundColor: currentFamily.color, /* O bien currentFamily.color si querés que sea dinámico */
                      borderRadius: '2px', 
                      margin: '0 auto' 
                    }} 
                  />
                </div>

                {/* Acordeón de Preguntas */}
                <Accordion defaultActiveKey="0" className="faq-accordion d-flex flex-column gap-3">
                  
                  {/* Pregunta 1 */}
                  <Accordion.Item eventKey="0" className="border rounded-3 overflow-hidden">
                    <Accordion.Header>
                      <span className="fw-bold" style={{ color: '#0d1b2a', fontSize: '0.95rem' }}>
                        ¿Bajo qué formatos de archivos reciben planos técnicos?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                      Aceptamos planos de fabricación en formatos 3D nativos como <strong>SolidWorks, STEP e IGES</strong>, y formatos vectoriales en 2D como <strong>DXF, DWG</strong> y documentos <strong>PDF</strong> estándar para realizar cotizaciones rápidas.
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Pregunta 2 */}
                  <Accordion.Item eventKey="1" className="border rounded-3 overflow-hidden">
                    <Accordion.Header>
                      <span className="fw-bold" style={{ color: '#0d1b2a', fontSize: '0.95rem' }}>
                        ¿Cuáles son los lotes mínimos de producción que manejan?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Nos especializamos en producciones de <strong>series medianas y grandes</strong>. Optimizamos nuestros tiempos de ciclo mediante celdas automatizadas y tornos multiejos para ofrecer el mejor costo unitario en lotes seriados.
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Pregunta 3 */}
                  <Accordion.Item eventKey="2" className="border rounded-3 overflow-hidden">
                    <Accordion.Header>
                      <span className="fw-bold" style={{ color: '#0d1b2a', fontSize: '0.95rem' }}>
                        ¿Realizan envíos de piezas mecanizadas a todo el país?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Sí, realizamos el embalaje protectivo y despacho de piezas desde nuestra planta industrial en <strong>Rafaela, Santa Fe</strong>, hacia cualquier punto de la República Argentina mediante expresos contratados por el cliente o transportes líderes de carga.
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Pregunta 4 */}
                  <Accordion.Item eventKey="3" className="border rounded-3 overflow-hidden">
                    <Accordion.Header>
                      <span className="fw-bold" style={{ color: '#0d1b2a', fontSize: '0.95rem' }}>
                        ¿Cómo cotizan si no tengo un plano digital de la pieza?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Puede enviarnos una muestra física de la pieza a mecanizar. Nuestro equipo de ingeniería realiza relevamientos dimensionales e <strong>ingeniería inversa</strong> en planta para generar el plano constructivo digital y cotizarlo sin demoras.
                    </Accordion.Body>
                  </Accordion.Item>

                </Accordion>
              </div>

            </div>
          )}

          {/* CASO 2: TABLA DE CUPLAS (CON PLANO TÉCNICO Y FOTO REAL) */}
          {currentFamily.tipo === 'cuplas' && (
            <Row className="g-4 align-items-center">
              
              {/* Columna Izquierda: Ambas Imágenes (Plano Técnico + Foto Real) */}
              <Col xs={12} lg={3} xl={3}> 
                <div className="d-flex flex-column gap-3 justify-content-center">
                  
                  {/* 1. Plano Técnico Estático con Cotas (Más alto y aprovechando todo el ancho) */}
                  <div className="bg-light p-2 border rounded text-center shadow-sm">
                    <div 
                      className="bg-white p-2 border rounded shadow-sm d-flex align-items-center justify-content-center" 
                      style={{ height: '310px' }}
                    >
                      <img 
                        src="/productos/cuplas-plano.png" 
                        alt="Plano Técnico Cupla" 
                        style={{ 
                          height: '100%', 
                          width: '100%', 
                          objectFit: 'contain',
                          display: 'block',
                          margin: '0 auto'
                        }}
                      />
                    </div>
                  </div>

                  {/* 2. Foto Real con Zoom */}
                  <div className="bg-light p-2 border rounded text-center shadow-sm">
                    <div 
                      className="cupla-zoom-wrapper p-2 border shadow-sm d-flex align-items-center justify-content-center" 
                      style={{ backgroundColor: '#fff', borderRadius: '8px', height: '240px' }}
                    >
                      <img 
                        src="/productos/cuplas-roscadas.png" 
                        alt="Cuplas Roscadas" 
                        className="cupla-zoom-img"
                        style={{ 
                          maxHeight: '100%', 
                          maxWidth: '100%', 
                          objectFit: 'contain' 
                        }}
                      />
                    </div>
                  </div>

                </div>
              </Col>

              {/* Columna Derecha: Tablas de Subfamilias con sus cabeceras rojas */}
              <Col xs={12} lg={9} xl={9}>
                <div className="d-flex flex-column gap-4">
                  {currentFamily.subfamilias.map((sub, idx) => (
                    <div key={idx} className="subfamily-container">
                      
                      {/* Cabecera roja alineada exclusivamente con el ancho de la tabla */}
                      <div 
                        className="subfamily-header text-white text-center fw-bold py-2 px-3 rounded-top text-uppercase" 
                        style={{ backgroundColor: currentFamily.color, fontSize: '0.95rem', letterSpacing: '0.5px' }}
                      >
                        {sub.nombre}
                      </div>

                      {/* Contenedor de la tabla */}
                      <div className="bg-white p-3 border border-top-0 rounded-bottom shadow-sm">
                        <div className="table-responsive rounded">
                          <Table hover className="align-middle mb-0 custom-product-table">
                            <thead className="table-light text-secondary text-uppercase small">
                              <tr>
                                <th style={{ width: '15%' }} className="text-start">Código</th>
                                <th style={{ width: '35%' }} className="text-start">Descripción</th>
                                <th style={{ width: '15%' }} className="text-start">ØH (mm)</th>
                                <th style={{ width: '23%' }} className="text-start">Ø1 Ø2 Rosca</th>
                                <th style={{ width: '12%' }} className="text-start">L (mm)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sub.productos.map((prod, pIdx) => (
                                <tr key={pIdx}>
                                  <td className="fw-bold text-dark text-start py-2">{prod.codigo}</td>
                                  <td className="text-secondary small text-start py-2">{prod.denominacion}</td>
                                  <td className="text-secondary small text-start py-2">{prod.diametroH}</td>
                                  <td className="text-secondary small text-start py-2">{prod.rosca}</td>
                                  <td className="text-secondary small text-start py-2">{prod.largo}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </Col>

            </Row>
          )}

          {/* CASO 3: CATÁLOGO ESTÁNDAR (IMPLEMENTADO CON DOUBLE PRODUCT TABLE) */}
          {currentFamily.tipo === 'catalogo' && (
            <div className="d-flex flex-column gap-3">
              {currentFamily.subfamilias.map((sub, idx) => (
                <DoubleProductTable
                  key={idx}
                  title={sub.nombre}
                  products={sub.productos}
                  headerColor={currentFamily.color}
                  hasCompatibility={sub.columnas?.includes('Compatibilidad')}
                />
              ))}
            </div>
          )}

        </Container>
      </section>
    </div>
  );
};