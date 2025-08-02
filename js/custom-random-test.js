let quiz = [];
let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];
let unansweredQuestions = [];
let answeredIncorrectly = false;
let answered = false;
let testTitle = "";

document.body.style.backgroundColor = "#ffffee"; // Color suave para la vista

document.getElementById("answers").style.textAlign = "center"; // Centra las respuestas
document.getElementById("test-title").classList.remove("hidden");
document.getElementById('shuffle-questions').checked
document.getElementById('shuffle-answers').checked

// Función para mostrar/ocultar subcategorías
function toggleSubcategory(id) {
    const subcategory = document.getElementById(id);
    if (subcategory.style.display === "block") {
        subcategory.style.display = "none";
    } else {
        subcategory.style.display = "block";
    }
}

function loadQuestions(category) {
    const shuffleQuestions = document.getElementById('shuffle-questions').checked;
    const shuffleAnswers = document.getElementById('shuffle-answers').checked;
// Ocultar los checkboxes cuando se carga un test
document.getElementById('shuffle-container').classList.add('hidden');
    switch (category) {
        case 'tit1785': 
            testTitle = 'TEST TITULO 1 - Disposiciones generales 7/85';
            quiz = [...tit1785]; // Crear copia del array
            break;
        case 'tit1cap1785': 
            testTitle = 'TEST TITULO 1 - Disposiciones generales 7/85 (Dificil)';
            quiz = [...tit1cap1785]; // Crear copia del array
            break;
        case 'titcap11785': 
            testTitle = 'TITULO 2 - El Municipio - CAP.1 Territorio y Población 7/85';
            quiz = [...titcap11785]; // Crear copia del array
            break;
		case 'titcap12785': 
            testTitle = 'TITULO 2 - El Municipio - CAP.2 Organización 7/85';
            quiz = [...titcap12785]; // Crear copia del array
            break;
		case 'titcap13785': 
            testTitle = 'TITULO 2 - El Municipio - CAP.3 Competencias 7/85';
            quiz = [...titcap13785]; // Crear copia del array
            break;
		case 'tit3cap1785': 
            testTitle = 'TITULO 3 - La Provincia - CAP.1 Organización 7/85';
            quiz = [...tit3cap1785]; // Crear copia del array
            break;		
		case 'tit3cap2785': 
            testTitle = 'TITULO 3 - La Provincia - CAP.2 Competencias 7/85';
            quiz = [...tit3cap2785]; // Crear copia del array
            break;
		case 'tit3cap34785': 
            testTitle = 'TITULO 3 - La Provincia - CAP3. Regímenes especiales - CAP4. Otras Entidades locales 7/85';
            quiz = [...tit3cap34785]; // Crear copia del array
            break;
		case 'tit5cap12785': 
            testTitle = 'TIT.3 - La Provincia - CAP5. Disposiciones comunes a las Ent.locales - CAP1. Régimen de funcionamiento - CAP2. Relaciones interadm.7/85';
            quiz = [...tit5cap12785]; // Crear copia del array
            break;
		case 'tit5cap34785': 
            testTitle = 'TIT.3 - La Provincia - TIT5. Dispo comunes a las Entidades loc - CAP3. Impugnación de actos y acuerdos y ejercicio de acciones - CAP4. Información y participación ciudadanas 7/85';
            quiz = [...tit5cap34785]; // Crear copia del array
            break;
		case 'tit5cap5785': 
            testTitle = 'TIT.3 - La Provincia - TIT5. Dispo comunes a las Entidades loc - CAP5. Estatuto de los miembros de las Corporaciones locales 7/85';
            quiz = [...tit5cap5785]; // Crear copia del array
            break;
		case 'tit6cap12785': 
            testTitle = 'TITULO 3 - La Provincia - TIT6. Bienes, actividades y servicios, y contratación - CAP1. Bienes - CAP2. Actividades y Servicios 7/85';
            quiz = [...tit6cap12785]; // Crear copia del array
            break;
		case 'tit7cap12785': 
            testTitle = 'TITULO 3 - La Provincia - TIT7. Personal al servicio de las Ent.Locales - CAP1. Disp.Generales - CAP2. Disp.Comunes a los Funcionarios de Carrera 7/85';
            quiz = [...tit7cap12785]; // Crear copia del array
            break;
		case 'tit7cap345785': 
            testTitle = 'TITULO 3 - La Provincia - TIT7. Personal al servicio de las Ent.Locales - CAP3. Selec. y forma. funcionarios habilitación carácter nacional y sistema de provisión de plazas - CAP4. Selec. restantes funcionarios y reglas provisión puestos de trabajo - CAP5. Del personal laboral y eventual 7/85';
            quiz = [...tit7cap345785]; // Crear copia del array
            break;
		case 'tit8cap785': 
            testTitle = 'TITULO 3 - La Provincia - TIT8. Haciendas Locales 7/85';
            quiz = [...tit8cap785]; // Crear copia del array
            break;
		case 'tit9cap785': 
            testTitle = 'TITULO 3 - La Provincia - TIT9. Organizaciones para la cooperación entre las Administraciones Públicas en materia de Administración Local 7/85';
            quiz = [...tit9cap785]; // Crear copia del array
            break;
		case 'tit10cap12785': 
            testTitle = 'TITULO 3 - La Provincia - TIT10. Régimen de organización de los municipios de gran población - CAP1. Ámbito de aplicación - CAP2. Organización y funcionamiento de los órganos municipales necesarios 7/85';
            quiz = [...tit10cap12785]; // Crear copia del array
            break;
		case 'tit10cap34785': 
            testTitle = 'TITULO 3 - La Provincia - TIT10. Régimen de organización de los municipios de gran población - CAP3. Gestión económico-financiera - CAP4. Conferencia de Ciudades 7/85';
            quiz = [...tit10cap34785]; // Crear copia del array
            break;
		case 'tit11cap785': 
            testTitle = 'TITULO 3 - La Provincia - TIT11. Tipificación de las infracciones y sanciones por las Entidades Locales en determinadas materias 7/85';
            quiz = [...tit11cap785]; // Crear copia del array
            break;
		case 'tit1252015': 
            testTitle = 'TIT1. Objeto y ámbito de aplicación - TIT2.Personal al servicio de las Adm.Púb. 5/2015';
            quiz = [...tit1252015]; // Crear copia del array
            break;	
		case 'tit3cap1252015': 
            testTitle = 'TIT3. Derechos y deberes empleados públicos - CAP1.Derechos de los emp. públicos - CAP2.Derecho carrera profesional y promoción interna. Evaluación desempeño - CAP3.Derechos retributivos 5/2015';
            quiz = [...tit3cap1252015]; // Crear copia del array
            break;		
		case 'tit3cap452015': 
            testTitle = 'TIT3. Derechos y deberes empleados públicos - CAP4.Derecho a la negociación colectiva, representación y participación institucional. Derecho de reunión.5/2015';
            quiz = [...tit3cap452015]; // Crear copia del array
            break;		
		case 'tit3cap5652015': 
            testTitle = 'TIT3. Derechos y deberes empleados públicos - CAP5.Derecho a la jornada de trabajo, permisos y vacaciones - CAP6.Deberes de los empleados públicos. Código de Conducta.5/2015';
            quiz = [...tit3cap5652015]; // Crear copia del array
            break;
		case 'bolsaayto': 
            testTitle = 'EXAMEN BOLSA AYTO HUELVA';
            quiz = [...bolsaayto]; // Crear copia del array
            break;
        case 'random': 
            testTitle = 'TEST ALEATORIO';
            quiz = [...tit1785, ...tit1cap1785, ...titcap11785, ...titcap12785, ...titcap13785, ...tit3cap1785, ...tit3cap2785, ...tit3cap34785, ...tit5cap12785, ...tit5cap34785, ...tit5cap5785,
			 ...tit6cap12785, ...tit7cap12785, ...tit7cap345785, ...tit8cap785, ...tit9cap785, ...tit10cap12785, ...tit10cap34785, ...tit11cap785, ...tit1252015, ...tit3cap1252015, ...tit3cap452015,
			 ...tit3cap5652015, ...bolsaayto].slice(0, 50);
            break;
        default: 
            quiz = []; 
            testTitle = 'TEST DESCONOCIDO';
    }
    
    // Aplicar mezcla de preguntas si está marcado
    if (shuffleQuestions) {
        quiz = quiz.sort(() => Math.random() - 0.5);
    }
           
    document.getElementById("categories").classList.add("hidden");
    document.getElementById("question").classList.remove("hidden");
    document.getElementById("answers").classList.remove("hidden");
    document.getElementById("test-title").textContent = testTitle;
    incorrectAnswers = [];
    answeredIncorrectly = false;
    currentQuestion = 0;
    score = 0;
    unansweredQuestions = [];
    showQuestion();
}

function showQuestion() {
    const q = quiz[currentQuestion];
    document.getElementById("question").innerHTML = `<strong>Pregunta ${currentQuestion + 1} de ${quiz.length}</strong><br>${q.question}`;
    const answersElement = document.getElementById("answers");
    answersElement.innerHTML = "";
    answersElement.style.display = "flex";
    answersElement.style.flexDirection = "column";
    answersElement.style.alignItems = "center";
    const answerLabels = ['a.)', 'b.)', 'c.)', 'd.)'];
    let answers = q.answers.map((answer, index) => ({
    text: answer,
    originalIndex: index
}));

if (document.getElementById('shuffle-answers').checked) {
    answers = answers.sort(() => Math.random() - 0.5);
}

answers.forEach((answerObj, displayIndex) => {
    const button = document.createElement("button");
    button.textContent = `${answerLabels[displayIndex]} ${answerObj.text}`;
    button.onclick = () => checkAnswer(button, answerObj.originalIndex);
    button.style.display = "block";
    button.style.margin = "10px 0";
    button.style.width = "50%";
    answersElement.appendChild(button);
});

    
    // Agregar botón de siguiente pregunta
    const nextButton = document.createElement("button");
    nextButton.textContent = "Siguiente Pregunta";
    nextButton.style.marginTop = "20px";
    nextButton.onclick = () => nextQuestion();
    answersElement.appendChild(nextButton);
    
    // Botón de Salir del Test
    const exitButton = document.createElement("button");
    exitButton.textContent = "Salir del Test";
    exitButton.style.marginTop = "10px";
    exitButton.style.backgroundColor = "red";
    exitButton.style.color = "white";
    exitButton.style.border = "none";
    exitButton.style.padding = "10px 20px";
    exitButton.style.cursor = "pointer";
    exitButton.onclick = () => exitQuiz();
    answersElement.appendChild(exitButton);
}

// Función para salir del test
function exitQuiz() {
    if (confirm("¿Seguro que quieres salir del test? Perderás el progreso.")) {
        location.reload(); // Recarga la página para volver al inicio
    }
}

function checkAnswer(button, index) {
    answered = true;
    if (index === quiz[currentQuestion].correct) {
        button.classList.add("correct"); // Usar clase en lugar de estilo directo
        if (!answeredIncorrectly) {
            score++;
        }
    } else {
        button.classList.add("incorrect"); // Usar clase en lugar de estilo directo
        incorrectAnswers.push(currentQuestion);
        answeredIncorrectly = true;
    }
}

function nextQuestion() {
    if (!answered) {
        unansweredQuestions.push(currentQuestion);
    }
    answered = false;
    answeredIncorrectly = false;
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById("question").textContent = "¡Quiz terminado!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("score").textContent = `Puntuación: ${score} de ${quiz.length}`;
    document.getElementById("score").classList.remove("hidden");

    let correctAnswersHTML = "<h4>Respuestas correctas:</h4><ul>";
    quiz.forEach((q, index) => {
        let color = unansweredQuestions.includes(index) ? 'gray' : incorrectAnswers.includes(index) ? 'red' : 'green';
        correctAnswersHTML += `<li style="color:${color}">${q.question} - <strong>${q.answers[q.correct]}</strong></li>`;
    });
    correctAnswersHTML += "</ul>";
    document.getElementById("correct-answers").innerHTML = correctAnswersHTML;
    document.getElementById("correct-answers").classList.remove("hidden");
    document.getElementById("restart").classList.remove("hidden");

}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    unansweredQuestions = [];
    answeredIncorrectly = false;
    answered = false;
    document.getElementById("question").classList.add("hidden");
    document.getElementById("answers").classList.add("hidden");
    document.getElementById("score").classList.add("hidden");
    document.getElementById("correct-answers").classList.add("hidden");
    document.getElementById("restart").classList.add("hidden");
    document.getElementById("categories").classList.remove("hidden");
	// Mostrar los checkboxes al volver al menú principal
    document.getElementById('shuffle-container').classList.remove('hidden');
}

// Inicializar las subcategorías como ocultas al cargar la página
window.onload = function() {
    const subcategories = document.querySelectorAll('.subcategory');
    subcategories.forEach(function(subcategory) {
        subcategory.style.display = 'none';
    });
};
// Añadir este código al final del archivo main-js-updated.js

// Función para crear el modal de selección de temas
function createRandomTestSelector() {
    // Ocultar menú de categorías
    document.getElementById("categories").classList.add("hidden");
	document.getElementById('shuffle-container').classList.add('hidden');
    
    // Crear el modal
    const modal = document.createElement("div");
    modal.id = "custom-test-modal";
    modal.style.maxWidth = "800px";
    modal.style.margin = "0 auto";
    modal.style.padding = "20px";
    modal.style.border = "1px solid #ccc";
    modal.style.borderRadius = "10px";
    modal.style.backgroundColor = "#ffffee";
    
    // Título del modal
    const title = document.createElement("h3");
    title.textContent = "Selecciona los temas para tu test aleatorio";
    modal.appendChild(title);
    
    // Descripción
    const description = document.createElement("p");
    description.textContent = "Marca los temas que deseas incluir en tu test aleatorio y selecciona el número de preguntas";
    modal.appendChild(description);
    
    // Contenedor de checkboxes para los temas
    const topicsContainer = document.createElement("div");
    topicsContainer.style.maxHeight = "400px";
    topicsContainer.style.overflowY = "auto";
    topicsContainer.style.padding = "10px";
    topicsContainer.style.border = "1px solid #ddd";
    topicsContainer.style.borderRadius = "5px";
    topicsContainer.style.marginBottom = "20px";
    
    // Crear checkboxes para cada tema
    const allTopics = [
        {id: 'tit1785', name: 'TEST TITULO 1 - Disposiciones generales 7/85'},
		{id: 'tit1cap1785', name: 'TITULO 1 - Disposiciones generales 7/85 (Dificil)'},
        {id: 'titcap11785', name: 'TITULO 2 - El Municipio - CAP.1 Territorio y Población'},
		{id: 'titcap12785', name: 'TITULO 2 - El Municipio - CAP.2 Organización 7/85'},
		{id: 'titcap13785', name: 'TITULO 2 - El Municipio - CAP.3 Competencias 7/85'},		
		{id: 'tit3cap1785', name: 'TITULO 3 - La Provincia - CAP.1 Organización 7/85'},		
		{id: 'tit3cap2785', name: 'TITULO 3 - La Provincia - CAP.2 Competencias 7/85'},		
		{id: 'tit3cap34785', name: 'TITULO 3 - La Provincia - CAP3. Regímenes especiales - CAP4. Otras Entidades locales 7/85'},
		{id: 'tit5cap12785', name: 'TIT.3 - La Provincia - TIT5. Disposiciones comunes a las Ent.locales - CAP1. Régimen de funcionamiento - CAP2. Relaciones interadm.7/85'},
		{id: 'tit5cap34785', name: 'TITULO 3 - La Provincia - TIT5. Disposiciones comunes a las Entidades locales - CAP3. Impugnación de actos y acuerdos y ejercicio de acciones - CAP4. Información y participación ciudadanas 7/85'},
		{id: 'tit5cap5785', name: 'TITULO 3 - La Provincia - TIT5. Disposiciones comunes a las Entidades locales - CAP5. Estatuto de los miembros de las Corporaciones locales.7/85'},
		{id: 'tit6cap12785', name: 'TITULO 3 - La Provincia - TIT6. Bienes, actividades y servicios, y contratación - CAP1. Bienes - CAP2. Actividades y Servicios.7/85'},
		{id: 'tit7cap12785', name: 'TITULO 3 - La Provincia - TIT7. Personal al servicio de las Ent.Locales - CAP1. Disp.Generales - CAP2. Disp.Comunes a los Funcionarios de Carrera.7/85'},
		{id: 'tit7cap345785', name: 'TITULO 3 - La Provincia - TIT7. Personal al servicio de las Ent.Locales - CAP3. Selec. y forma. funcionarios habilitación carácter nacional y sistema de provisión de plazas - CAP4. Selec. restantes funcionarios y reglas provisión puestos de trabajo - CAP5. Del personal laboral y eventual.7/85'},
		{id: 'tit8cap785', name: 'TITULO 3 - La Provincia - TIT8. Haciendas Locales.7/85'},
		{id: 'tit10cap12785', name: 'TITULO 3 - La Provincia - TIT10. Régimen de organización de los municipios de gran población - CAP1. Ámbito de aplicación - CAP2. Organización y funcionamiento de los órganos municipales necesarios.7/85'},
		{id: 'tit10cap34785', name: 'TITULO 3 - La Provincia - TIT10. Régimen de organización de los municipios de gran población - CAP3. Gestión económico-financiera - CAP4. Conferencia de Ciudades.7/85'},
		{id: 'tit11cap785', name: 'TITULO 3 - La Provincia - TIT11. Tipificación de las infracciones y sanciones por las Entidades Locales en determinadas materias.7/85'},
		{id: 'tit1252015', name: 'TIT1. Objeto y ámbito de aplicación - TIT2.Personal al servicio de las Adm.Púb.5/2015'},
		{id: 'tit3cap1252015', name: 'TIT3. Derechos y deberes empleados públicos - CAP1.Derechos de los emp. públicos - CAP2.Derecho carrera profesional y promoción interna. Evaluación desempeño - CAP3.Derechos retributivos.5/2015'},
		{id: 'tit3cap452015', name: 'TIT3. Derechos y deberes empleados públicos - CAP4.Derecho a la negociación colectiva, representación y participación institucional. Derecho de reunión.5/2015'},
		{id: 'tit3cap5652015', name: 'TIT3. Derechos y deberes empleados públicos - CAP5.Derecho a la jornada de trabajo, permisos y vacaciones - CAP6.Deberes de los empleados públicos. Código de Conducta.5/2015'},
		{id: 'bolsaayto', name: 'EXAMEN BOLSA AYTO HUELVA'},
    ];
    
    // Botón para seleccionar/deseleccionar todos
    const selectAllContainer = document.createElement("div");
    selectAllContainer.style.marginBottom = "10px";
    const selectAllBtn = document.createElement("button");
    selectAllBtn.textContent = "Seleccionar Todos";
    selectAllBtn.style.marginRight = "10px";
    selectAllBtn.onclick = function() {
        const checkboxes = document.querySelectorAll('#custom-test-modal input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = true);
    };
    
    const deselectAllBtn = document.createElement("button");
    deselectAllBtn.textContent = "Deseleccionar Todos";
    deselectAllBtn.onclick = function() {
        const checkboxes = document.querySelectorAll('#custom-test-modal input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);
    };
    
    selectAllContainer.appendChild(selectAllBtn);
    selectAllContainer.appendChild(deselectAllBtn);
    topicsContainer.appendChild(selectAllContainer);
    
    // Añadir checkbox para cada tema
    allTopics.forEach(topic => {
        const topicDiv = document.createElement("div");
        topicDiv.style.margin = "5px 0";
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `checkbox-${topic.id}`;
        checkbox.value = topic.id;
        
        const label = document.createElement("label");
        label.htmlFor = `checkbox-${topic.id}`;
        label.textContent = topic.name;
        label.style.paddingLeft = "5px";
        
        topicDiv.appendChild(checkbox);
        topicDiv.appendChild(label);
        topicsContainer.appendChild(topicDiv);
    });
    
    modal.appendChild(topicsContainer);
    
    // Selector para número de preguntas
    const numQuestionsDiv = document.createElement("div");
    numQuestionsDiv.style.margin = "20px 0";
    
    const numQuestionsLabel = document.createElement("label");
    numQuestionsLabel.htmlFor = "num-questions";
    numQuestionsLabel.textContent = "Número de preguntas: ";
    
    const numQuestionsInput = document.createElement("input");
    numQuestionsInput.type = "number";
    numQuestionsInput.id = "num-questions";
    numQuestionsInput.min = "5";
    numQuestionsInput.max = "100";
    numQuestionsInput.value = "50";
    numQuestionsInput.style.width = "60px";
    numQuestionsInput.style.marginLeft = "10px";
    
    numQuestionsDiv.appendChild(numQuestionsLabel);
    numQuestionsDiv.appendChild(numQuestionsInput);
    modal.appendChild(numQuestionsDiv);
    
    // Botones
    const buttonsDiv = document.createElement("div");
    buttonsDiv.style.display = "flex";
    buttonsDiv.style.justifyContent = "center";
    buttonsDiv.style.gap = "10px";
    buttonsDiv.style.marginTop = "20px";
    
    const startButton = document.createElement("button");
    startButton.textContent = "Iniciar Test";
    startButton.style.backgroundColor = "#3399ff";
    startButton.style.color = "white";
    startButton.style.padding = "10px 20px";
    startButton.style.cursor = "pointer";
    startButton.onclick = function() {
        generateCustomTest();
    };
    
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancelar";
    cancelButton.style.padding = "10px 20px";
    cancelButton.style.cursor = "pointer";
    cancelButton.onclick = function() {
        document.body.removeChild(modal);
        document.getElementById("categories").classList.remove("hidden");
    };
    
    buttonsDiv.appendChild(startButton);
    buttonsDiv.appendChild(cancelButton);
    modal.appendChild(buttonsDiv);
    
    document.body.appendChild(modal);
}

// Función para generar el test personalizado
function generateCustomTest() {
    const selectedTopics = [];
    const checkboxes = document.querySelectorAll('#custom-test-modal input[type="checkbox"]:checked');
    
    if (checkboxes.length === 0) {
        alert("Debes seleccionar al menos un tema");
        return;
    }
    
    // Obtener todos los temas seleccionados
    checkboxes.forEach(cb => {
        selectedTopics.push(cb.value);
    });
    
    // Obtener número de preguntas
    const numQuestions = parseInt(document.getElementById("num-questions").value);
    if (isNaN(numQuestions) || numQuestions < 5) {
        alert("El número de preguntas debe ser al menos 5");
        return;
    }
    
     // Crear un array con todas las preguntas de los temas seleccionados
    let allQuestions = [];
    selectedTopics.forEach(topic => {
        switch(topic) {
            case 'tit1785': allQuestions = allQuestions.concat(tit1785); break;
			case 'tit1cap1785': allQuestions = allQuestions.concat(tit1cap1785); break;
            case 'titcap11785': allQuestions = allQuestions.concat(titcap11785); break;
			case 'titcap12785': allQuestions = allQuestions.concat(titcap12785); break;
			case 'titcap13785': allQuestions = allQuestions.concat(titcap13785); break;
			case 'tit3cap1785': allQuestions = allQuestions.concat(tit3cap1785); break;
			case 'tit3cap2785': allQuestions = allQuestions.concat(tit3cap2785); break;
			case 'tit3cap34785': allQuestions = allQuestions.concat(tit3cap34785); break;
			case 'tit5cap12785': allQuestions = allQuestions.concat(tit5cap12785); break;
			case 'tit5cap34785': allQuestions = allQuestions.concat(tit5cap34785); break;
			case 'tit5cap5785': allQuestions = allQuestions.concat(tit5cap5785); break;
			case 'tit6cap12785': allQuestions = allQuestions.concat(tit6cap12785); break;
			case 'tit7cap12785': allQuestions = allQuestions.concat(tit7cap12785); break;
			case 'tit7cap345785': allQuestions = allQuestions.concat(tit7cap345785); break;
			case 'tit8cap785': allQuestions = allQuestions.concat(tit8cap785); break;	
			case 'tit9cap785': allQuestions = allQuestions.concat(tit9cap785); break;	
			case 'tit10cap12785': allQuestions = allQuestions.concat(tit10cap12785); break;				
			case 'tit10cap34785': allQuestions = allQuestions.concat(tit10cap34785); break;
			case 'tit11cap785': allQuestions = allQuestions.concat(tit11cap785); break;
			case 'tit1252015': allQuestions = allQuestions.concat(tit1252015); break;
			case 'tit3cap1252015': allQuestions = allQuestions.concat(tit3cap1252015); break;
			case 'tit3cap452015': allQuestions = allQuestions.concat(tit3cap452015); break;
			case 'tit3cap5652015': allQuestions = allQuestions.concat(tit3cap5652015); break;
			case 'bolsaayto': allQuestions = allQuestions.concat(bolsaayto); break;		
        }
    });
    
    // Verificar que hay suficientes preguntas
    if (allQuestions.length < numQuestions) {
        alert(`Los temas seleccionados solo contienen ${allQuestions.length} preguntas. El número máximo de preguntas para este test será ${allQuestions.length}.`);
        numQuestions = allQuestions.length;
    }
    
    // Mezclar y seleccionar el número de preguntas solicitado
    const selectedQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, numQuestions);
    
    // Ocultar el modal
    const modal = document.getElementById("custom-test-modal");
    document.body.removeChild(modal);
    
    // Configurar el test
    testTitle = `TEST PERSONALIZADO (${numQuestions} preguntas)`;
    quiz = selectedQuestions;
    
    // Iniciar el test
    document.getElementById("question").classList.remove("hidden");
    document.getElementById("answers").classList.remove("hidden");
    document.getElementById("test-title").textContent = testTitle;
    document.getElementById("test-title").classList.remove("hidden");
    incorrectAnswers = [];
    answeredIncorrectly = false;
    currentQuestion = 0;
    score = 0;
    unansweredQuestions = [];
    showQuestion();
}

// Modificar el HTML para añadir el botón de test personalizado
function addCustomTestButton() {
    // Buscar el botón de test aleatorio existente
    const randomTestButton = document.getElementById("random-test");
    
    // Crear el botón de test personalizado
    const customTestButton = document.createElement("button");
    customTestButton.id = "custom-test";
    customTestButton.textContent = "TEST ALEATORIO PERSONALIZADO";
    customTestButton.style.backgroundColor = "#33cc66";
    customTestButton.style.color = "white";
    customTestButton.style.fontWeight = "bold";
    customTestButton.style.width = "60%";
    customTestButton.style.margin = "10px auto";
    customTestButton.onclick = createRandomTestSelector;
    
    // Insertar el nuevo botón después del botón de test aleatorio
    randomTestButton.parentNode.insertBefore(customTestButton, randomTestButton.nextSibling);
}

// Ejecutar cuando el DOM esté cargado
window.addEventListener('DOMContentLoaded', function() {
    addCustomTestButton();
});
