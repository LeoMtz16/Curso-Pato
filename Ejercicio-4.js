const libros = [
    {
      titulo: "Metro 2033",
      autor: "Unrusovsky",
      fecha: 2023,
      enStock: false,
    },
    {
      titulo: "Twilight",
      autor: "Unaemo",
      fecha: 2021,
      enStock: true,
    },
    {
      titulo: "Qiubole con las morras",
      autor: "Undios",
      fecha: 2020,
      enStock: false,
    },
  ];
  
  
  function getTitulo(indice) {
    return libros[indice].titulo;
  }
  
  console.log(getTitulo(1));
  
  function addLibro(newLibro) {
    libros.push({
      titulo: newLibro.titulo,
      autor: newLibro.autor,
      fecha: newLibro.fecha,
      enStock: newLibro.enStock,
    });
  }
  
  addLibro({
    titulo: "Nuevo Libro",
    autor: "Unautor",
    fecha: 2021,
    enStock: true,
  });
  
  console.log(libros);
  
  function deleteBookByIndex(indice) {
    libros.splice(indice, 1);
    return libros;
  }
  console.log(deleteBookByIndex(1));

  for (const index in libros) {
    console.log(getTitulo(index))
  }

  for(let index= libros.length; index>0; index--) {
    
  }