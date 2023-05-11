<script>
    export default {
        props: ["array", "caller", "item"],
        data() {
            return {
            showList: false,
            selected: null,
            list: this.array
                //['XS','S','M','L','XL','XXL']
            }
        },

        methods: {

            showOnClick(e){
                if (e.currentTarget != this.caller) return;
                this.showList = !this.showList;
            },

            selectSizeOnClick(e){
                const id = e.currentTarget.id;
                //this.selected = this.list[id];
                this.selected =this.list[id];
                this.showList = !this.showList;
                this.returnSize(this.sizeSelected);
            },
       
            
        },
    }
</script>


<template>
    <ul v-if="showList" class="dropdownList">
        <item v-for="value, index in list" 
            :id="index"
            @click="selectSizeOnClick"
            
        >
            <span >{{value}}</span>
            <div  class="checkbox"
                v-show="sizeSelected == value"
            >
                <img  src="Icon_check.svg">
            </div>

        </item>

    </ul> 
</template>


<style lang="scss">
    .dropdownList{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0.375em;
        margin-top: 0px;
        //gap: 0.25em;

        
        width: 20em;
        //height: 15.5em;
        //display: none;

        background: #FFFFFF;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
        border-radius: 0.5em;

        li{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0.2em 1em;
            gap: 0.5em;

            width: 19.25em;
            height: 2.25em;

            background: #FFFFFF;
            border-radius: 0.375em;

            flex: none;
            order: 2;
            align-self: stretch;
            flex-grow: 0;

            .checkbox{
                width: 16px;
                height: 16px;

                align-items: center;

            

                flex: none;
                order: 1;
                flex-grow: 0;
                background: #0D1421;
                border-radius: 999px;

                img{
                    //align-self: center;
                    margin: 3px;
                    margin-top: 4px;
                    display: block;
                    //border: 2px solid #FFFFFF;
                }
            }

        }

        li:hover{
            background: #F2F4F7;
            
        }
        
    }
</style>