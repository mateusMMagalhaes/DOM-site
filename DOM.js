window.onload = function(){
    header();
    hero();
    about();
    skills();
    contact();
    footer();
}

function header(){
    let header = document.createElement("header");
    header.id = "header";
    header.className = "d-flex flex-column justify-content-center"

    let nav = document.createElement("nav")
    nav.id = "navbar nav-menu";
    nav.className = "navbar nav-menu";
    
    let ul = document.createElement("ul");

    let menuItems = [
        { text: "Home", iconClass: "bx bx-home", sectionId: "hero" },
        { text: "About", iconClass: "bx bx-user", sectionId: "about" },
        { text: "Skills", iconClass: "bx bx-server", sectionId: "services" },
        { text: "Contact", iconClass: "bx bx-envelope", sectionId: "contact" }
    ];

    menuItems.forEach(function(item){
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = "#" + item.sectionId;
        a.className = "nav-link scrollto";
        a.innerHTML = "<i class='" + item.iconClass + "'></i> <span>" + item.text + "</span>";

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);
    document.body.appendChild(header);
}

function hero(){
    let section = document.createElement("section")
    section.id = "hero";
    section.className = "d-flex flex-column justify-content-center";

    let div = document.createElement("div");
    div.className = "container">
    div.setAttribute("data-aos","zoom-in")
    div.setAttribute("data-aos-delay","100");

    let h1 = document.createElement("h1");
    h1.textContent = "Mateus Magalhaes";

    let p = document.createElement("p");
    p.textContent = "I'm a developer";
    let span = document.createElement("span");
    span.className = "typed";
    span.setAttribute("data-typed-items", "Developer");
    p.appendChild(span);

    let divSocial = document.createElement("div");
    divSocial.className = "social-links"

    let instagramA = document.createElement("a");
    instagramA.href = "https://www.instagram.com/mm.magal/";
    instagramA.className ="instagram";
    let instagramI = document.createElement("i");
    instagramI.class="bx bxl-instagram";
    instagramA.appendChild(instagramI);

    divSocial.appendChild(instagramA);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(divSocial);
    section.appendChild(div);

    document.body.appendChild(section);
}

function about(){

    let section = document.createElement("section");
    section.id = "about";
    section.className = "about";

 
    let container = document.createElement("div");
    container.className = "container";
    container.setAttribute("data-aos", "fade-up");

  
    let sectionTitle = document.createElement("div");
    sectionTitle.className = "section-title";
    let h2 = document.createElement("h2");
    h2.textContent = "About";
    let p = document.createElement("p");
    p.textContent = "Sou um programador atualmente no 3 ano do ensino medio da fiap School, trabalhando como desenvolvedor de sistemas na empresa Starline";
    sectionTitle.appendChild(h2);
    sectionTitle.appendChild(p);

  
    let row = document.createElement("div");
    row.className = "row";

  
    let col1 = document.createElement("div");
    col1.className = "col-lg-4";
    let img = document.createElement("img");
    img.src = "assets/img/profile-img.jpg";
    img.className = "img-fluid";
    img.alt = "";
    col1.appendChild(img);

    let col2 = document.createElement("div");
    col2.className = "col-lg-8 pt-4 pt-lg-0 content";
    let h3 = document.createElement("h3");
    h3.textContent = "Web Developer.";
    let p2 = document.createElement("p");
    p2.className = "fst-italic";
    p2.textContent = "Um pouco mais sobre mim";

    
    let row2 = document.createElement("div");
    row2.className = "row";
    let col3 = document.createElement("div");
    col3.className = "col-lg-6";
    let ul = document.createElement("ul");
    let items = [
        { label: "Aniversario:", value: "30 setembro" },
        { label: "Idade:", value: "17" },
        { label: "Freelance:", value: "disponivel" }
    ];
    items.forEach(function(item) {
        let li = document.createElement("li");
        let strong = document.createElement("strong");
        strong.textContent = item.label;
        li.appendChild(strong);
        let span = document.createElement("span");
        span.textContent = item.value;
        li.appendChild(span);
        ul.appendChild(li);
    });
    col3.appendChild(ul);
    row2.appendChild(col3);

    col2.appendChild(h3);
    col2.appendChild(p2);
    col2.appendChild(row2);

    row.appendChild(col1);
    row.appendChild(col2);

    container.appendChild(sectionTitle);
    container.appendChild(row);

    section.appendChild(container);

  
    document.body.appendChild(section);
}

function skills(){

    let section = document.createElement("section");
    section.id = "services";
    section.className = "services";

    let container = document.createElement("div");
    container.className = "container";
    container.setAttribute("data-aos", "fade-up");


    let sectionTitle = document.createElement("div");
    sectionTitle.className = "section-title";
    let h2 = document.createElement("h2");
    h2.textContent = "skills";
    let p = document.createElement("p");
    p.textContent = "Algumas de minhas habilidades são:";
    sectionTitle.appendChild(h2);
    sectionTitle.appendChild(p);


    let row = document.createElement("div");
    row.className = "row";


    let skills = [
    {
        iconName: "bx bxl-dribbble",
        title: "java Script",
        description: "Linguagem de programação essencial para o desenvolvimento web, o JavaScript permite a criação de interatividade dinâmica nas páginas, impulsionando a experiência do usuário no navegador."
    },
    {
        iconName: "bx bx-file",
        title: "python",
        description: "Python é uma linguagem de programação versátil e de fácil aprendizado, adequada para uma letiedade de aplicações, desde desenvolvimento web e automação até inteligência artificial. Sua sintaxe clara e expressiva contribui para a produtividade dos desenvolvedores."
    },
    {
        iconName: "bx bx-tachometer",
        title: "C#",
        description: "C# é uma linguagem de programação robusta e orientada a objetos, desenvolvida pela Microsoft. Amplamente utilizada para criar aplicativos Windows, serviços web e jogos, destaca-se pela segurança e desempenho."
    }
    ];


    skills.forEach(function(skill) {
        let col = document.createElement("div");
        col.className = "col-lg-4 col-md-6 d-flex align-items-stretch";
        col.setAttribute("data-aos", "zoom-in");
        col.setAttribute("data-aos-delay", "100");

        let iconBox = document.createElement("div");
        iconBox.className = "icon-box iconbox-blue";

        let icon = document.createElement("div");
        icon.className = "icon";
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100");
        svg.setAttribute("height", "100");
        svg.setAttribute("viewBox", "0 0 600 600");
        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("stroke", "none");
        path.setAttribute("stroke-width", "0");
        path.setAttribute("fill", "#f5f5f5");
        path.setAttribute("d", skill.iconPath);
        svg.appendChild(path);
        let iconElement = document.createElement("i");
        iconElement.className = skill.iconName;
        icon.appendChild(svg);
        icon.appendChild(iconElement);

        let h4 = document.createElement("h4");
        let a = document.createElement("a");
        a.href = "#";
        a.textContent = skill.title;
        h4.appendChild(a);

        let description = document.createElement("p");
        description.textContent = skill.description;

        iconBox.appendChild(icon);
        iconBox.appendChild(h4);
        iconBox.appendChild(description);

        col.appendChild(iconBox);
        row.appendChild(col);
    });

    container.appendChild(sectionTitle);
    container.appendChild(row);
    section.appendChild(container);


    document.body.appendChild(section);
}

function contact(){
   
    let section = document.createElement("section");
    section.id = "contact";
    section.className = "contact";


    let container = document.createElement("div");
    container.className = "container";
    container.setAttribute("data-aos", "fade-up");


    let sectionTitle = document.createElement("div");
    sectionTitle.className = "section-title";
    let h2 = document.createElement("h2");
    h2.textContent = "Contact";
    sectionTitle.appendChild(h2);


    let row = document.createElement("div");
    row.className = "row mt-1";


    let col1 = document.createElement("div");
    col1.className = "col-lg-4";
    let info1 = document.createElement("div");
    info1.className = "info";
    let email = document.createElement("div");
    email.className = "email";
    let envelopeIcon = document.createElement("i");
    envelopeIcon.className = "bi bi-envelope";
    let emailHeader = document.createElement("h4");
    emailHeader.textContent = "Email:";
    let emailParagraph = document.createElement("p");
    emailParagraph.textContent = "Mateusfcmagalhaes@gmail.com";
    email.appendChild(envelopeIcon);
    email.appendChild(emailHeader);
    email.appendChild(emailParagraph);
    info1.appendChild(email);
    col1.appendChild(info1);


    let col2 = document.createElement("div");
    col2.className = "col-lg-8 mt-5 mt-lg-0";
    let form = document.createElement("form");
    form.action = "forms/contact.php";
    form.method = "post";
    form.setAttribute("role", "form");
    form.className = "php-email-form";
    let formRow1 = document.createElement("div");
    formRow1.className = "row";
    let formCol1 = document.createElement("div");
    formCol1.className = "col-md-6 form-group";
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.className = "form-control";
    nameInput.id = "name";
    nameInput.placeholder = "Your Name";
    nameInput.required = true;
    let formCol2 = document.createElement("div");
    formCol2.className = "col-md-6 form-group mt-3 mt-md-0";
    let emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.className = "form-control";
    emailInput.name = "email";
    emailInput.id = "email";
    emailInput.placeholder = "Your Email";
    emailInput.required = true;
    formCol1.appendChild(nameInput);
    formCol2.appendChild(emailInput);
    formRow1.appendChild(formCol1);
    formRow1.appendChild(formCol2);
    let formGroup1 = document.createElement("div");
    formGroup1.className = "form-group mt-3";
    let subjectInput = document.createElement("input");
    subjectInput.type = "text";
    subjectInput.className = "form-control";
    subjectInput.name = "subject";
    subjectInput.id = "subject";
    subjectInput.placeholder = "Subject";
    subjectInput.required = true;
    formGroup1.appendChild(subjectInput);
    let formGroup2 = document.createElement("div");
    formGroup2.className = "form-group mt-3";
    let messageTextarea = document.createElement("textarea");
    messageTextarea.className = "form-control";
    messageTextarea.name = "message";
    messageTextarea.rows = "5";
    messageTextarea.placeholder = "Message";
    messageTextarea.required = true;
    formGroup2.appendChild(messageTextarea);
    let divMy3 = document.createElement("div");
    divMy3.className = "my-3";
    let divLoading = document.createElement("div");
    divLoading.className = "loading";
    divLoading.textContent = "Loading";
    let divErrorMessage = document.createElement("div");
    divErrorMessage.className = "error-message";
    let divSentMessage = document.createElement("div");
    divSentMessage.className = "sent-message";
    divSentMessage.textContent = "Your message has been sent. Thank you!";
    divMy3.appendChild(divLoading);
    divMy3.appendChild(divErrorMessage);
    divMy3.appendChild(divSentMessage);
    let divTextCenter = document.createElement("div");
    divTextCenter.className = "text-center";
    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Send Message";
    divTextCenter.appendChild(submitButton);
    form.appendChild(formRow1);
    form.appendChild(formGroup1);
    form.appendChild(formGroup2);
    form.appendChild(divMy3);
    form.appendChild(divTextCenter);
    col2.appendChild(form);

    row.appendChild(col1);
    row.appendChild(col2);

    container.appendChild(sectionTitle);
    container.appendChild(row);
    section.appendChild(container);


    document.body.appendChild(section);
}

function footer(){
    
let footer = document.createElement("footer");
footer.id = "footer";


let div = document.createElement("div");
div.className = "copyright";
div.innerHTML = "&copy; Copyright <strong><span>Mateus Magalhaes</span></strong>. All Rights Reserved";
footer.appendChild(div);

document.body.appendChild(footer);

}