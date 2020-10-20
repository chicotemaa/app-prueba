Vue.component('app-peliculas', {
    props:{
        name:String,
        cantidad: Number
    },
    template: `
        <div>
        <strong>
        {{name}}
        </strong>
        </div>
    
    
    
    `

});

const app = new Vue({
    el:'#app',
    data: {
        mostrar:true,
        Peliculas: [
        {name:'los simpsons'},
        {name:'corazon de caballero'},
        {name:'batman'},
        {name:'ironman'}

        ]
    },
    methods:{
        changeVisibility : function (){
            this.mostrar=!this.mostrar;

        }
    }
})