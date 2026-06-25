/* ==========================================
   SCENE CONTROLLER
========================================== */

function initScene(){

    const hero =
        document.querySelector(CONFIG.selectors.hero);

    const scene2 =
        document.querySelector(CONFIG.selectors.scene2);

    const openButton =
        document.querySelector(CONFIG.selectors.openButton);

    openButton.addEventListener("click",()=>{

        hero.style.display="none";

        scene2.style.display="grid";

    });

}