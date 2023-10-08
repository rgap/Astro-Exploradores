//primera parte
function initCanvas() {
  var canvas = document.getElementById("my_canvas");
  var ctx = canvas.getContext("2d");
  var naveImage = new Image();
  var tierra = new Image();
  var saturno = new Image();
  var marte = new Image();
  var jupiter = new Image();
  var venus = new Image();
  var neptuno = new Image();
  var mercurio = new Image();

  //backgroundImage.src = ""; // Agrega la URL de tu imagen de fondo aquí
  naveImage.src = "./public/img/astro.png";
  tierra.src = "./public/img/planets/tierra.png"; // Agrega la URL de tu imagen de planeta aquí
  saturno.src = "./public/img/planets/saturno.png";
  marte.src = "./public/img/planets/marte.png";
  jupiter.src = "./public/img/planets/jupiter.png";
  venus.src = "./public/img/planets/venus.png";
  neptuno.src = "./public/img/planets/neptuno.png";
  mercurio.src = "./public/img/planets/mercurio.png";

  var cW = canvas.width;
  var cH = canvas.height;

  function Planet(options) {
    return {
      name: options.name || "",
      x: options.x || 0,
      y: options.y || 0,
      radius: options.radius || 30,
      color: options.color || "red",
      description: options.description || "",
      image: options.image || null,
      visited: false,
    };
  }

  var planets = [];

  // Agrega planetas con la misma imagen en diferentes posiciones
  setTimeout(function () {
    planets.push(
      new Planet({
        name: "Earth",
        x: 100,
        y: -30,
        radius: 30,
        color: "blue",
        description: `
                <p>Welcome to Earth, our blue home! Get ready to explore the unique diversity of our planet, brimming with life, stunning landscapes, and natural wonders.</p>
                <p><strong>Natural Wonders:</strong> Discover the beauty of the oceans, towering mountains, expansive deserts, and lush jungles. Earth offers an astonishing variety of landscapes that will take your breath away.</p>
                <p><strong>Encounter with Life:</strong> Explore Earth's rich biodiversity. From wildlife in the Amazon jungle to marine life on coral reefs, every corner of the planet hosts unique forms of life.</p>
                <p><strong>Eco-Friendly Adventures:</strong> Engage in sustainable and eco-friendly activities. Experience the unique connection we have with our planet and learn how we can protect and preserve our shared home.</p>
                <p><strong>Views from Space:</strong> Observe Earth from orbit and contemplate the fragility and beauty of our planet. Reflect on the importance of taking care of our home in the vast cosmos.</p>
                `,
        image: tierra,
      })
    );
  }, 3000);

  setTimeout(function () {
    planets.push(
      new Planet({
        name: "Mars",
        x: 500,
        y: -300,
        radius: 30,
        color: "red",
        description: `
                <p>Welcome to Mars, the Red Planet! Get ready to explore the fourth planet in the solar system, known for its distinctive color and fascinating features.</p>
                <p><strong>Martian Terrain:</strong> Discover the diversity of Martian landscapes, from vast plains to gigantic canyons. Explore the rocky surface and search for signs of ancient rivers and lakes.</p>
                <p><strong>Martian Adventures:</strong> Engage in thrilling Martian expeditions. Drive rovers and conduct scientific investigations to unravel the mysteries of this captivating planet.</p>
                <p><strong>Panoramic Views:</strong> Enjoy breathtaking views of Martian sunrises and sunsets. Observe the moons Phobos and Deimos as they rise over the Martian horizon.</p>
                <p><strong>Martian Exploration:</strong> Join in the exploration of Martian craters and search for possible signs of ancient life. Mars awaits you with secrets that you can only discover on this unique journey.</p>
                `,
        image: marte,
      })
    );
  }, 3000);

  setTimeout(function () {
    planets.push(
      new Planet({
        name: "Saturn",
        x: 500,
        y: -100,
        radius: 30,
        color: "yellow",
        description: `
                    <p>Welcome to Saturn, the lord of the rings! Embark on an expedition to this incredible planet, known for its stunning rings and cosmic beauty.</p>
                    <p><strong>Amazing Rings:</strong> Marvel at the view of Saturn's dazzling rings. Observe the intricacy of its rings and capture unique images of this astronomical phenomenon.</p>
                    <p><strong>Cosmic Exploration:</strong> Dive into Saturn's atmosphere and discover its unique features. Experience the low gravity as you immerse yourself in the gas and cloud atmosphere.</p>
                    <p><strong>Fascinating Moons:</strong> Saturn is home to a variety of intriguing moons. Explore the larger moons, like Titan, which has its own dense atmosphere and lakes of methane and ethane.</p>
                    <p><strong>Stellar Adventures:</strong> Engage in star observations from Saturn's orbit. With advanced telescopes, you can study unique astronomical phenomena from this incredible vantage point.</p>
                `,
        image: saturno,
      })
    );
  }, 3000);

  setTimeout(function () {
    planets.push(
      new Planet({
        name: "Jupiter",
        x: 200,
        y: -150,
        radius: 30,
        color: "orange",
        description: `
                <p>Welcome to Jupiter, the majestic king of our solar system! Prepare for an interplanetary adventure that will take you to explore the mysteries of this gas giant.</p>
                <p><strong>Explore the Grandeur:</strong> Jupiter greets you with its vast cloud bands and the enigmatic Great Red Spot. Dive into the grandeur of its storms and discover the unique beauty of this colossal planet.</p>
                <p><strong>Incredible Panoramic Views:</strong> From your spaceship, enjoy breathtaking panoramic views of Jupiter's cloud belts. Watch the auroras dance at the poles, creating an unforgettable celestial spectacle.</p>
                <p><strong>Atmospheric Adventures:</strong> Experience the intensity of the Jovian atmosphere with hurricane-like winds and electrical storms. Navigate through its upper layers with cutting-edge technology designed to withstand the most extreme conditions.</p>
                <p><strong>Lonely Planet Tip:</strong> Don't miss the chance to explore Jupiter's Galilean moons, such as Io and Europa, each with its own wonders and secrets to discover.</p>
                `,
        image: jupiter,
      })
    );
  }, 3000);

  setTimeout(function () {
    planets.push(
      new Planet({
        name: "Neptune",
        x: 800,
        y: -100,
        radius: 30,
        color: "blue",
        description: `
                <p>Welcome to Neptune, the majestic king of our solar system! Prepare for an interplanetary adventure that will take you to explore the mysteries of this gas giant.</p>
                <p><strong>Explore the Grandeur:</strong> Neptune welcomes you with its vast cloud formations and mysterious storms. Delve into the splendor of its tempests and discover the unique beauty of this colossal planet.</p>
                <p><strong>Incredible Panoramic Views:</strong> From your spaceship, enjoy breathtaking panoramic views of Neptune's cloud belts. Observe the ethereal play of lights at the poles, creating an unforgettable celestial spectacle.</p>
                <p><strong>Atmospheric Adventures:</strong> Experience the intensity of Neptune's atmosphere, characterized by high-speed winds and mysterious weather patterns. Navigate through its upper layers with cutting-edge technology designed to withstand the most extreme conditions.</p>
                <p><strong>Lonely Planet Tip:</strong> Don't miss the chance to explore Neptune's moons, especially Triton, which harbors its own set of wonders and secrets to be uncovered.</p>
                `,
        image: neptuno,
      })
    );
  }, 3000);

  var launcher = {
    y: cH - 100,
    x: cW * 0.5 - 25,
    w: 80,
    h: 100,
    direccion: "",
    bg: "white",
  };

  function renderPlanets() {
    planets.forEach(function (planet) {
      if (!planet.visited) {
        if (planet.image) {
          ctx.drawImage(
            planet.image,
            planet.x - planet.radius,
            planet.y - planet.radius,
            planet.radius * 2,
            planet.radius * 2
          );
        } else {
          ctx.beginPath();
          ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
          ctx.fillStyle = planet.color;
          ctx.fill();
          ctx.closePath();
        }

        // Puedes agregar el nombre del planeta en el centro
        ctx.fillStyle = "white";
        ctx.font = "bold 20px Arial";
        ctx.fillText(
          planet.name,
          planet.x - planet.radius,
          planet.y + planet.radius + 20
        );
      }
    });
  }

  function renderLauncher() {
    ctx.fillStyle = launcher.bg;
    //ctx.drawImage(backgroundImage, 0, 0);
    ctx.drawImage(naveImage, launcher.x, launcher.y, launcher.w, launcher.h);
  }

  var collisionMode = false;

  function animate() {
    ctx.clearRect(0, 0, cW, cH);
    renderLauncher();
    renderPlanets();

    // Mueve los planetas hacia abajo solo si no estamos en modo de colisión
    if (!collisionMode) {
      planets.forEach(function (planet) {
        planet.y += 1;

        if (!planet.visited && isColliding(launcher, planet)) {
          planet.visited = true;
          collisionMode = true; // Entramos en modo de colisión
          showPlanetInfo(planet);
        }

        // Verifica si el planeta ha salido de la pantalla solo si no ha sido visitado
        if (planet.y > cH + planet.radius && !planet.visited) {
          planet.y = -50; // Reinicia la posición del planeta arriba
        }

        if (planet.visited) {
          setTimeout(() => {
            planet.visited = false; // Marca el planeta como no visitado
            planet.y = -50; // Reinicia la posición del planeta arriba
          }, 1000); // Espera 1 segundo antes de reiniciar la posición
        }
      });
    }
  }

  var animateInterval = setInterval(animate, 16);

  document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case 37: // Izquierda
        launcher.x -= 5;
        break;
      case 39: // Derecha
        launcher.x += 5;
        break;
      case 38: // Arriba
        launcher.y -= 5;
        break;
      case 40: // Abajo
        launcher.y += 5;
        break;
      case 80: // P para recargar
        location.reload();
        break;
      // Puedes agregar más casos según sea necesario
    }

    // Evitar que la nave salga de la pantalla
    launcher.x = Math.max(0, Math.min(launcher.x, cW - launcher.w));
    launcher.y = Math.max(0, Math.min(launcher.y, cH - launcher.h));
  });

  function showPlanetInfo(planet) {
    // Crear un contenedor principal
    var container = document.createElement("div");
    // container.classList.add("div", "bg-danger");
    container.classList.add("div", "rounded");
    // Crear un elemento de tabla
    var table = document.createElement("table");
    table.classList.add("table", "table-bordered");
    table.classList.add("table", "rounded"); // Clases de Bootstrap
    table.style.width = "";
    table.style.backgroundColor = "transparent";

    // Crear la fila superior con las imágenes
    var imageRow = table.insertRow(0);
    var imageCell1 = imageRow.insertCell(0);
    var imageCell2 = imageRow.insertCell(1);

    // Agregar las imágenes al row superior
    imageCell1.innerHTML = `<img src="${planet.image.src}" alt="${planet.name}" style="width: 50%;">`;
    imageCell2.innerHTML = `<img src="${planet.image.src}" alt="${planet.name}" style="width: 50%;">`;

    // Crear la fila inferior con el itinerario y la descripción
    var infoRow = table.insertRow(1);
    var itineraryCell = infoRow.insertCell(0);
    var descripCell = infoRow.insertCell(1);

    // Agregar el itinerario y la descripción a la fila inferior
    itineraryCell.innerHTML = `<strong>Itinerary:</strong> ${planet.name}`;
    descripCell.innerHTML = `<strong>Description:</strong> ${planet.name}`;

    // Agregar el formulario en la celda de itinerarios
    var formRow = table.insertRow(2);
    var formCell = formRow.insertCell(0);
    var descriptionCell = formRow.insertCell(1);
    formCell.colSpan = 1; // Para ocupar el ancho completo de la tabla

    // Agregar el formulario con estilos de Bootstrap
    formCell.innerHTML = `
            <form class="p-3" id="explorationForm">
                <div class="mb-2">
                    <label for="fechaHora" class="form-label"><strong>Date and Time</strong></label>
                    <input type="datetime-local" class="form-control" id="fechaHora" name="fechaHora" required>
                </div>
                <div class="mb-2">
                    <label for="actividades" class="form-label"><strong>Activities or Events</strong></label>
                    <textarea class="form-control" id="actividades" name="actividades"  placeholder="Activities or Events"></textarea>
                </div>
                <div class="mb-2">
                    <label for="duracionEstimada" class="form-label"><strong>Estimated Duration</strong></label>
                    <input type="text" class="form-control" id="duracionEstimada" name="duracionEstimada" placeholder="Estimated Duration">
                </div>
                <div class="mb-2">
                    <label for="notasEspeciales" class="form-label"><strong>Special Notes</strong></label>
                    <textarea class="form-control" id="notasEspeciales" name="notasEspeciales" rows="3" placeholder="Special Notes"></textarea>
                </div>
                <div class="mb-2">
                    <label for="eventosEspeciales" class="form-label"><strong>Phone Number</strong></label>
                    <textarea class="form-control" id="eventosEspeciales" name="eventosEspeciales" rows="3" placeholder="Phone Number"></textarea>
                </div>
                <div class="mb-2">
                    <label for="comunicaciones" class="form-label"><strong>Email</strong></label>
                    <textarea class="form-control" id="comunicaciones" name="comunicaciones" rows="3" placeholder="Email"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Book Trip</button>
            </form>
        `;

    descriptionCell.colSpan = 2; // Para ocupar el ancho completo de la tabla
    // Agregar la descripción estilo Lonely Planet
    descriptionCell.innerHTML += `${planet.description}`;

    // Crear botones
    var returnToEarthButton = document.createElement("button");
    returnToEarthButton.innerHTML = "<strong>Go back to Earth</strong>";
    returnToEarthButton.classList.add("btn", "btn-primary");
    returnToEarthButton.classList.add("btn", "fs-5");
    returnToEarthButton.addEventListener("click", returnToEarth);

    var resumeGameButton = document.createElement("button");
    resumeGameButton.innerHTML = "<strong>Take Off</strong>";
    resumeGameButton.classList.add("btn", "btn-success");
    resumeGameButton.classList.add("btn", "m-2");
    resumeGameButton.classList.add("btn", "fs-5");
    resumeGameButton.addEventListener("click", resumeGame);

    // Agregar la tabla y los botones al contenedor
    container.appendChild(table);
    container.appendChild(returnToEarthButton);
    container.appendChild(resumeGameButton);

    container.style.position = "absolute";
    container.style.top = "0";
    container.style.right = "0";
    container.style.padding = "20px"; // Ajusta según sea necesario
    container.style.backgroundColor = "#98a8fc";

    //Estilo adicional para la descripción
    descriptionCell.style.padding = "20px"; // Ajusta según sea necesario
    descriptionCell.style.color = "#000"; // Color del texto para contrastar
    formCell.style.backgroundColor = "transparent";
    imageCell1.style.backgroundColor = "transparent";
    imageCell2.style.backgroundColor = "transparent";
    descriptionCell.style.backgroundColor = "transparent";
    itineraryCell.style.backgroundColor = "transparent";
    descripCell.style.backgroundColor = "transparent";

    // Agregar estilos al contenedor para que se muestre al lado derecho
    var labelStyles = document.createElement("style");
    labelStyles.innerHTML = `
            .form-label {
                text-align: left;
                display: inline-block;
                width: 100%;
                padding:0;
                margin:0;
            }
        `;
    document.head.appendChild(labelStyles);
    // Limpiar el contenido del contenedor de la ventana modal
    document.getElementById("modal-content").innerHTML = "";

    // Agregar el contenedor al cuerpo del documento
    document.getElementById("modal-content").appendChild(container);

    // Obtener el formulario después de agregarlo al DOM
    var explorationForm = document.getElementById("explorationForm");

    // Evento submit para el formulario
    explorationForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Resto del código del evento submit...
      swal("Thank you!", "We will contact you shortly", "success");
    });
  }

  function returnToEarth() {
    // Realizar otras acciones necesarias al regresar a la Tierra

    // Restablecer el modo de colisión
    collisionMode = false;

    // Reiniciar el juego
    location.reload();
  }

  function resumeGame() {
    // Detener el intervalo anterior si existe
    clearInterval(animateInterval);

    // Realizar otras acciones necesarias al despegar

    // Restablecer el modo de colisión
    collisionMode = false;

    // Limpiar el contenido del contenedor de la ventana modal
    document.getElementById("modal-content").innerHTML = "";

    // Iniciar un nuevo intervalo
    animateInterval = setInterval(animate, 16);
  }

  function isColliding(obj1, obj2) {
    return (
      obj1.x < obj2.x + obj2.radius &&
      obj1.x + obj1.w > obj2.x - obj2.radius &&
      obj1.y < obj2.y + obj2.radius &&
      obj1.y + obj1.h > obj2.y - obj2.radius
    );
  }
}

// Segunda parte
function Launcher() {
  var canvas = document.getElementById("my_canvas");
  var ctx = canvas.getContext("2d");

  var cW = canvas.width;
  var cH = canvas.height;

  this.y = cH - 100;
  this.x = cW * 0.5 - 25;
  this.w = 50;
  this.h = 90;
  this.direccion = "";
  this.bg = "white";
  this.gameStatus = {
    over: false,
    message: "",
    fillStyle: "red",
    font: "italic bold 36px Arial, sans-serif",
  };

  this.render = function () {
    renderLauncher();
    checkPlanetCollision();
    checkGameStatus();
  };

  function checkPlanetCollision() {
    planets.forEach(function (planet) {
      if (!planet.visited && isColliding(launcher, planet)) {
        planet.visited = true;
        showPlanetInfo(planet);
      }
    });
  }
}

// Resto del código

var launcher = new Launcher();

window.addEventListener("load", function (event) {
  initCanvas();
});
