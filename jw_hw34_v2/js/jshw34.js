creatureNewElement("first", 'div', 'body', 'page', "", 'false', 0,0)
creatureNewElement( "next", 'div', '.page', 'namePage', "Тест по программированию", 'false', 0, 0 )
creatureNewElement( "next", 'ol',  '.page', 'boxQuestion',"", 'false', 0,0);

for (i=0; i<3; i++) {
	var m2=0;
    var k=i+1;
	creatureNewElement( "next", 'li',  '.boxQuestion', 'nameQuestion',". Вопрос № ", 'false', k,0);
	var radioflag = "radioflag"+k;	
	 for(var j=0; j<3; j++) {  	 
        var m=j+1;
		creatureNewElement("next", 'input','.nameQuestion:nth-of-type(', 'radioForm',"", 'true', k,m);	
		creatureNewElement( "next", 'div', '.nameQuestion:nth-of-type(','radioForm2', 'Вариант ответа № ','true', k,m);
     };
};
creatureNewElement("next",  'button', '.page', 'nameButton',"Проверить мои результаты",'false', 0,0);



function creatureNewElement(sign, tagparent, parentNewElement, ClassNewElement, textNewElement,insetNewElement, indexInset, m1) {;
   var element  = document.createElement(tagparent);
   if (sign==="first"){LastCreatedTag=element};
	element.classList.add(ClassNewElement);
	if (indexInset<1) {element.innerHTML = textNewElement};
	var parent1= parentNewElement;
	if (indexInset>0 && insetNewElement==="false"){ 
		element.innerHTML = indexInset+textNewElement+indexInset;
		var parent1= parentNewElement;
	};
	if (indexInset>0 && insetNewElement==="true"){ 
		element.innerHTML = textNewElement+m1;
		var parent1=parentNewElement+indexInset+')';
	};	
	var parent= document.querySelector(parent1);
	parent.appendChild(element);
	if (tagparent=='input'){
		var radioflag = "radioflag"+k;
		element.setAttribute('type', "radio");
		element.setAttribute('name', radioflag);
	}
};





