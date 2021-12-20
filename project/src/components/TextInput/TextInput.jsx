import './TextInput.css'


function TextInput() {
    return (
        <form className={'text-input wrapper__text-input'}>

            <div className={'input text-input__input'}>
                <input className={'input__field'}
                       id={'input-text'}
                       type={'text'}
                       required
                       placeholder={'Ваше Имя'}
                />
                <input className={'input__field'}
                       id={'input-text'}
                       type={'text'}
                       required
                       placeholder={'Ваша Фамилия'}
                />
                <input className={'input__field'}
                       id={'input-text'}
                       type={'text'}
                       required
                       placeholder={'Оставьте Ваш отзыв'}
                />
            </div>
            <button className="button text-input__button" id='button'>Отправить</button>
            <button className="button text-edit__button" id='button-edit'>Изменить</button>
            <button className="button text-del__button" id='button-del'>Удалить отзыв</button>
        </form>
    )
}

export default TextInput;