
$(document).ready(function() {
    update_links();
    $('body').css('overflow', 'hidden');
    $('#goto_page').on('click', goto_page);
    $('#github, #tryhackme, #rootme, #projects').css('cursor', 'cell');
    $('#github, #tryhackme, #rootme, #projects').hover(
        function() {
            $(this).addClass('animate__animated animate__pulse animate__infinite');
            //$(this).text("> " + $(this).attr('id'));
        }, function() {
            $(this).removeClass('animate__animated animate__pulse animate__infinite');
            //$(this).text($(this).attr('id'));
        }
    )

});

function goto_page() {
    $('#goto_page').removeClass('animate__pulse');
    $('#goto_page').addClass('animate__flash');
    
    setTimeout(() => {
        let page = $(this).attr('href'); // Page cible
        let speed = 1250; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    }, 1500);
}

function update_links() {
    let github = "https://github.com/stoptexting";
    let tryhackme = "https://tryhackme.com/p/0110101101010001";
    let rootme = "https://www.root-me.org/bruhbruh";
    let projects = "#project_section";

    $('#github_link').attr('href', github);
    $('#tryhackme_link').attr('href', tryhackme);
    $('#rootme_link').attr('href', rootme);
    $('#projects_link').attr('href', projects);

    $('#projects_link').on('click', function() {
        let page = $(this).attr('href'); // Page cible
        let speed = 1250; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });

    $('#go_back').on('click', function() {
        let page = $(this).attr('href'); // Page cible
        let speed = 1250; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });
}