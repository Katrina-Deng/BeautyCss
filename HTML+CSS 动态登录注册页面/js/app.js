// 动画处理
const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

// 注册按钮时候显示注册面板和动画
sign_up_btn.addEventListener('click',() => {
    container.classList.add('sign-up-move');
})

// 登录时候移除动画 移除注册面板和动画
sign_in_btn.addEventListener('click',() => {
    container.classList.remove('sign-up-move');
})