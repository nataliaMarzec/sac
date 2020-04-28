import React from 'react'

function Sac() {
  return (
    <div className="SAC">
     
      <header className="Sac-header">
      <meta HTTP-EQUIV="REFRESH"></meta>
      <title>ALOHA</title>
      </header>
      <body>Hora: 
      <script> miFecha = new Date() 
       document.write(miFecha.getHours() + ":" + miFecha.getMinutes() + ":" + miFecha.getSeconds()) 
      </script>
      <h1>Este es un proyecto final para la Universidad de Quilmes,
       realizado independientemente por Natalia Marzec</h1>
      <p>Es software desarrollado a medida para una efectiva adaptación empresarial,
       consiviendo integración,flexibilidad, seguridad y confianza.
       Realizado con tecnología de vanguardia. Brindando mantenimiento y amabilidad.</p>
      </body>
    </div>
  );
}
export default Sac;
