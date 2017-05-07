class Slider {
    
    constructor (public name:string , public num:number) {
    }

    setEvent() : void {

    }

    static initSlider() : Slider[] {
        var sliders: Slider[];
        var initLabels: string[] = [
            'スコープ',
            '予算',
            '品質',
            '時間'
        ];
        for (var label_name in initLabels) {
            sliders.push(new Slider(label_name, 3));
        }
        return sliders; 
    }

    static addSlider(name = '') : Slider {
        return new Slider(name, 3);
    }

}
export default Slider;
