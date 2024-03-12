
selectPlan = (planNumber) => {  

    let vyber = document.getElementById(`plan${planNumber}`);
    let div1 = document.getElementById('plan1')
    let div2 = document.getElementById('plan2')
    let div3 = document.getElementById('plan3')

    if(planNumber === 1){
        vyber.classList.add('plan--selected');
        div2.classList.remove('plan--selected')
        div3.classList.remove('plan--selected')
    } else if(planNumber === 2){
        vyber.classList.add('plan--selected');
        div1.classList.remove('plan--selected')
        div3.classList.remove('plan--selected')
    } else if( planNumber === 3){
        vyber.classList.add('plan--selected');
        div1.classList.remove('plan--selected')
        div2.classList.remove('plan--selected')
    } else {
        console.log("Chyba ve výběru slevy")
        div1.classList.remove('plan--selected')
        div2.classList.remove('plan--selected')
        div3.classList.remove('plan--selected')
    }
}

selectPlan(1);
  