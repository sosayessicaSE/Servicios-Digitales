document.addEventListener("DOMContentLoaded", function() {
    var titles = document.querySelectorAll('.title-link');
    titles.forEach(function(title) {
      title.addEventListener('click', function(event) {
        event.preventDefault(); 
        var container = this.parentNode.parentNode;
        var url = container.getAttribute('data-url');
        window.location.href = url;
      });
    });
  
    var videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(function(container) {
      container.addEventListener('click', function(event) {
        event.preventDefault(); 
        var url = this.getAttribute('data-url');
        window.location.href = url;
      });
    });
  });


  $(document).ready(function() {
    // Ocultar todas las secciones excepto la de Inicio al cargar la página
    $('#servicios').hide();
    $('#contacto').hide();
    $('#aprendiz').hide();
    $('#asesoria').hide();
    $('#empresa').hide();
  
    // Manejar los clics en los enlaces de la barra de navegación
    $('nav ul li a').click(function() {
      // Ocultar todas las secciones
      $('#inicio').hide();
      $('#servicios').hide();
      $('#contacto').hide();
      $('#aprendiz').hide();
      $('#asesoria').hide();
      $('#empresa').hide();

      
      // Mostrar la sección correspondiente al enlace clicado
      var seccion = $(this).attr('href');
      $(seccion).show();
      
      return false;
      
    });
  });

  $(document).ready(function() {
    // Ocultar todas las secciones excepto la de Inicio al cargar la página
    $('#servicios').hide();
    $('#contacto').hide();
    $('#aprendiz').hide();
    $('#asesoria').hide();
    $('#empresa').hide();

  

    $('#aprendizid').click(function() {
      // Ocultar todas las secciones
      $('#inicio').hide();
      $('#servicios').hide();
      $('#contacto').hide();
      $('#aprendiz').hide();
      $('#asesoria').hide();
      $('#empresa').hide();

      
      // Mostrar la sección correspondiente al enlace clicado
    
      $('#aprendiz').show();
      
      
      return false;
    });
  });
  
  $(document).ready(function() {
    // Ocultar todas las secciones excepto la de Inicio al cargar la página
    $('#servicios').hide();
    $('#contacto').hide();
    $('#aprendiz').hide();
    $('#asesoria').hide();
    $('#empresa').hide();

  

    $('#asesoriaid').click(function() {
      // Ocultar todas las secciones
      $('#inicio').hide();
      $('#servicios').hide();
      $('#contacto').hide();
      $('#aprendiz').hide();
      $('#asesoria').hide();
      $('#empresa').hide();

      
      // Mostrar la sección correspondiente al enlace clicado
    
      $('#asesoria').show();
      
      
      return false;
    });
  });
  
  $(document).ready(function() {
    // Ocultar todas las secciones excepto la de Inicio al cargar la página
    $('#servicios').hide();
    $('#contacto').hide();
    $('#aprendiz').hide();
    $('#asesoria').hide();
    $('#empresa').hide();

  

    $('#empresaid').click(function() {
      // Ocultar todas las secciones
      $('#inicio').hide();
      $('#servicios').hide();
      $('#contacto').hide();
      $('#aprendiz').hide();
      $('#asesoria').hide();
      $('#empresa').hide();

      
      // Mostrar la sección correspondiente al enlace clicado
    
      $('#empresa').show();
      
      
      return false;
    });
  });



  const axios = require("axios");


