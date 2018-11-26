/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface JsComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface JsComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'JsComponent': Components.JsComponent;
  }

  interface StencilIntrinsicElements {
    'js-component': Components.JsComponentAttributes;
  }


  interface HTMLJsComponentElement extends Components.JsComponent, HTMLStencilElement {}
  var HTMLJsComponentElement: {
    prototype: HTMLJsComponentElement;
    new (): HTMLJsComponentElement;
  };

  interface HTMLElementTagNameMap {
    'js-component': HTMLJsComponentElement
  }

  interface ElementTagNameMap {
    'js-component': HTMLJsComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
