import{_ as o,r as e,b as r,o as i,c as n,a as s,t as h}from"./index.0c067f6d.js";const c={data(){return{error:!1,loading:!0,info:"",surah:e([]),infosurah:e([])}},mounted(){this.getSurah(),this.getInfoSurah()},methods:{getSurah(){r.get("https://api.quran.com/api/v4/chapters/"+this.$route.params.id).then(t=>{this.surah=t.data.chapter}).catch(t=>{console.log(t),this.error=!0}).finally(()=>this.loading=!1)},getInfoSurah(){r.get("https://api.quran.com/api/v4/chapters/"+this.$route.params.id+"/info?language=id").then(t=>{this.infosurah=t.data.chapter_info,this.info=this.infosurah.text}).catch(t=>{console.log(t),this.error=!0}).finally(()=>this.loading=!1)}}},u={class:"text-center"},l=["innerHTML"];function f(t,p,d,_,a,g){return i(),n("div",u,[s("h1",null,"Surah "+h(a.surah.name_complex),1),s("div",{innerHTML:a.info},null,8,l)])}var x=o(c,[["render",f]]);export{x as default};
