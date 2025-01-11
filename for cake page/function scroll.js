document.addEventListener('DOMContentLoaded', function() {
    // Regular cakes scroll
    const recipe = document.querySelector('.recipe');
    const leftBtn = document.querySelector('.scroll_left');
    const rightBtn = document.querySelector('.scroll_right');
    
    // Gluten-free cakes scroll
    const glutenFree = document.querySelector('.glutan_free');
    const leftBtnGluten = document.querySelector('.gluten_scroll_left');
    const rightBtnGluten = document.querySelector('.gluten_scroll_right');
    
    const scrollAmount = 210; // 180px width + 30px margin

    // Update buttons for regular cakes
    const updateRegularButtons = () => {
        leftBtn.style.display = recipe.scrollLeft <= 0 ? 'none' : 'block';
        rightBtn.style.display = 
            recipe.scrollLeft >= (recipe.scrollWidth - recipe.clientWidth - 10) 
            ? 'none' : 'block';
    };

    // Update buttons for gluten-free cakes
    const updateGlutenButtons = () => {
        leftBtnGluten.style.display = glutenFree.scrollLeft <= 0 ? 'none' : 'block';
        rightBtnGluten.style.display = 
            glutenFree.scrollLeft >= (glutenFree.scrollWidth - glutenFree.clientWidth - 10) 
            ? 'none' : 'block';
    };

    // Regular cakes scroll events
    leftBtn.addEventListener('click', () => {
        recipe.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateRegularButtons, 100);
    });

    rightBtn.addEventListener('click', () => {
        recipe.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateRegularButtons, 100);
    });

    recipe.addEventListener('scroll', updateRegularButtons);

    // Gluten-free cakes scroll events
    leftBtnGluten.addEventListener('click', () => {
        glutenFree.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateGlutenButtons, 100);
    });

    rightBtnGluten.addEventListener('click', () => {
        glutenFree.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateGlutenButtons, 100);
    });

    glutenFree.addEventListener('scroll', updateGlutenButtons);

    // Initial button visibility
    updateRegularButtons();
    updateGlutenButtons();
})