export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener('click', close)

    function open(){
        //mudar classe active da modal
        modalWrapper.classList.add('active')
    }
    function close(){
        //remover classe active da modal
        modalWrapper.classList.remove('active')
    }

    return {
        open,
        close
    }
}