import styled from 'styled-components';

const ThumbForm = styled.div`
    padding: 20px 0;
`

const FormSearch = styled.form`
    display: flex;
    width: 300px;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 20px;
`

const FormInput = styled.input`
    width: 210px;
    border: none;
    outline: none;
    border-bottom: 1px solid gray;
`

const FormButton = styled.button`
    padding: 6px 12px;
    border-radius: 4px;
    background-color: cornflowerblue;
    color: white;
    cursor: pointer;
    border: none;
    &:hover {
      background: blue;
    }
`

export { ThumbForm, FormSearch, FormInput, FormButton };
