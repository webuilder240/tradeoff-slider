// import 'jquery';
import * as $ from 'jquery';


$(function(){

	var elementCount = 1;

	//最初に4つ生成する
	var initFields = [
		'スコープ',
		'予算',
		'品質',
		'時間'
	];

	for (var key in initFields) {
		elementCount = addSlider(elementCount,initFields[key]);
	}

	$('#slider--add').click(function(){
		elementCount = addSlider(elementCount,"");
	});

	$(document).on('input','.slider__wrapper__slider',function(){

		var value = $(this).val();
		var mainWrapper = $(this).parent();

		if (value === "5"){
			mainWrapper.find('.slider__wrapper__label__max').addClass('slider__wrapper__label__max--alert');
		} else {
			mainWrapper.find('.slider__wrapper__label__max').removeClass('slider__wrapper__label__max--alert');
		}

		if (value === "1"){
			mainWrapper.find('.slider__wrapper__label__min').addClass('slider__wrapper__label__min--alert');
		} else {
			mainWrapper.find('.slider__wrapper__label__min').removeClass('slider__wrapper__label__min--alert');
		}

		mainWrapper.find('.slider__wrapper__point').text(value);

	});

});

function addSlider(elementNum: number, fieldName: string){

	var htmlElements = [];

	htmlElements.push('<div class="slider__main__wrapper">');
	htmlElements.push('<input type="text" class="slider__wrapper__nameinput" name="element_'+elementNum+'_colom" value="'+fieldName+'" size="10" >');
	htmlElements.push('<span class="slider__wrapper__label__min">MIN</span>');
	htmlElements.push('<input type="range" class="slider__wrapper__slider" name="element_'+elementNum+'" value="3" min="1" max="5">');
	htmlElements.push('<span class="slider__wrapper__label__max">MAX</span>');
	htmlElements.push('<span class="slider__wrapper__point">3</span>');
	htmlElements.push('</div>');

	var htmlElementsString = htmlElements.join('');
	$('.slider__main').append(htmlElementsString);

	return elementNum+=1;
}
