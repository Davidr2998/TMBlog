export default function About() {
  return (
    <>
      <h1>About</h1>
      <p>
        Te doy la bienvenida a este pequeño proyecto hecho con Remix, este fue
        creado siguiendo un streaming de{" "}
        <a href="http://twitch.tv/midudev">Midudev</a>.
      </p>

      <div
        style={{
          backgroundColor: "#fefefe",
          borderRadius: "5px",
          color: "#212121",
          padding: "5px",
        }}
      >
        <small>
          Nota: este es solo un proyecto de prueba para entender como funciona
          mayor parte de Remix, los estilos en linea no estan hechos a posta
        </small>
      </div>
    </>
  );
}
