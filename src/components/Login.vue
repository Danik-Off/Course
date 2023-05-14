<template>
<div class="bg">
    <div class="modal">
        <div class="modal_header">
            <div class="receipt_icon">
               <img src="product/Icon_receipt.svg"> 
            </div>
            
            <span>Почти готово</span>
        </div>
        <div class="button_close">
            <img src="product/Icon_x.svg">
        </div>
        <div class="modal_content">
            <div class="content_header">
                <span class="header_title">Войдите в аккаунт</span>
                <span class="header_description">Введите логин и пароль в форме ниже</span>
            </div>
            <div class="content_form">
                <div class="form_textfield">
                    <span>Имя пользователя</span>
                    <input placeholder="Введите имя пользователя">
                </div>
                <div class="form_textfield">
                    <span>Пароль</span>
                    <input type="password" placeholder="Введите пароль">
                </div>
                <span class="reset_password">Восстановить пароль</span>
            </div>
            <div class="form_signup">
                <span>Нет аккаунта?</span>
                <span class="link_signup">Зарегистрироваться</span>
            </div>
        </div>
        <button class="button_signin">Войти</button>
    </div>
</div>
</template>

<style lang="scss">
.bg{
    
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    z-index: 1;

    background: #0d14217a;
    //opacity: 0.4;

    .modal{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 24px;
        gap: 40px;
        isolation: isolate;
        
        position: absolute;
        width: 510px;
        height: 612px;
        left: 44.0625em;
        top: 5.5em;
        
        background: #FFFFFF;
        border-radius: 16px;

        .modal_header{
            display: flex;
            flex-direction: row;
            align-items: center;
            
            padding: 0px;
            gap: 16px;


            width: 462px;
            height: 64px;

            span{
                
                width: 404px;
                height: 28px;

                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 28px;

                color: #0D1421;
            }

            .receipt_icon{
                box-sizing: border-box;

                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 12px;
                gap: 10px;

                width: 48px;
                height: 48px;

                border: 1px solid #EAECF0;
                border-radius: 10px;

                
            }


        }

        .button_close{
            
            padding: 8px;
            gap: 10px;

            position: absolute;
            width: 40px;
            height: 40px;
            left: 510px;
            top: 16px;
        }

        .modal_content{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0px;
            gap: 24px;

            width: 343px;
            height: 336px;

            .content_header{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0px;
                gap: 24px;

                width: 343px;
                height: 72px;

                .header_title{
                    width: 296px;
                    height: 40px;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 32px;
                    line-height: 40px;
                    color: #0D1421;
                }

                .header_description{
                    width: 343px;
                    height: 28px;

                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 28px;
  
                    color: #667085;
                }
            }

            .content_form{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 0px;
                gap: 16px;

                width: 343px;
                height: 192px;

                .form_textfield{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 0px;
                    gap: 4px;

                    width: 343px;
                    height: 68px;

                    span{
                        width: 343px;
                        height: 20px;
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 20px;
                        color: #354153;
                    }

                    input{
                        box-sizing: border-box;

                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        padding: 10px 16px;
                        gap: 8px;

                        width: 343px;
                        height: 44px;

                        background: #FFFFFF;

                        border: 1px solid #EAECF0;
                        border-radius: 8px;

                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 24px;

                        color: #667085;
                    }
                }

                .reset_password{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #0D1421;
                }
            }

            .form_signup{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: flex-start;
                padding: 0px;
                gap: 4px;

                width: 343px;
                height: 24px;

                span{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #667085;
                }

                .link_signup{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #0D1421;
                }
            }


        }

        .button_signin{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 10px 18px;
            gap: 8px;

            width: 462px;
            height: 44px;

            background: #0D1421;
            border-radius: 8px;

            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;

            color: #FFFFFF;
        }

    }
}
</style>

<script>

    
</script>