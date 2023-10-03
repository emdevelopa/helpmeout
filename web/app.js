const inputEl = document.getElementById('editInput')
// const editBtn = document.getElementById('editBtn')

const editName = ()=>{
        inputEl.disabled = '';
        inputEl.style.border = '1px solid #120B48'
        inputEl.style.borderRadius = '5px'
        inputEl.style.padding = '5px'
}

const videoUrl = document.getElementById('videoUrl')

const copyUrl = ()=>{
        let url = videoUrl
        navigator.clipboard.writeText(url.value).then(()=>{
                alert('Text copied to clipboard')
        }).catch((err)=>{
                console.log(err);
        })

}

// const successConteiner = document.getElementById('successContainer');

const sendToMail = ()=>{
        const container = document.createElement('div');
    container.innerHTML = `
    <div class="bg-[#00000059] fixed w-full top-0 h-full flex items-center" id="successContainer">
    <div
        class="bg-[#F2F4F7] w-[30%] max-[700px]:w-[90%]  px-20 py-8 rounded-[15px] margin-center flex flex-col items-center justify-center gap-20 relative">
        <div class="absolute top-10 right-10">
            <img src="./images/close-circle.svg" alt="logo" onclick="closePopUp()"/>
        </div>
        <div class="flex flex-col items-center justify-center">
            <img src="./images/success-kite.svg" alt="logo" />
            <p class="text-center">
                Your video link has been sent to
                <span class="font-bold">johnmark@gmail.com</span>
            </p>
        </div>

        <div class="flex flex-col items-center justify-center gap-8">
            <p class="text-center">
                Would you need to view this video later? Save to your account now!
            </p>
            <img src="./images/savevid.svg" alt="logo" />
            <div>
                <p class="text-center text-[#7E7E7E] font-bold text-[18px]">
                    Don’t have an account?
                    <span class="text-[#120B48]"><a href="#" class="underline">Create account</a></span>
                </p>
            </div>
        </div>


    </div>
</div>`
        document.body.appendChild(container)
}

const closePopUp = () => {
        const successContainer = document.getElementById('successContainer');
        if (successContainer) {
            successContainer.remove();
        }
    }
    