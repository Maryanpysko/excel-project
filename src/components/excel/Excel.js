import {$} from '@core/dom';
/*
    * selector - DOM element,
    * options Array components
 */
export class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
    }

    // Create node
    getRoot() {
        const $root = $.create('div', 'excel');
        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className);
            const component = new Component($el);
            // DEBUG
            // if (component.name) {
            //     window['c' + component.name] = component;
            // }
            $el.html(component.toHTML());
            $root.append($el);
            return component;
        });
        return $root;
    }

    // Render all component
    render() {
        this.$el.append(this.getRoot());
        this.components.forEach(component => component.init());
    }
}
