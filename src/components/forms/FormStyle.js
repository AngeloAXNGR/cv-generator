import styled from "styled-components";

export const FormWrapper = styled.div`
  margin:auto;
  width:750px;
  height: auto;
  padding: 30px;
  border-radius:10px;
  box-shadow:0 0 3px rgba(0,0,0.5);
  display: flex;
  flex-direction: column;
  gap:30px;
  @media (min-width: 1024px){
    width:35%;
  }
`

export const StyledFormSections = styled.div`
	display:flex;
	flex-direction:column;
	align-items:stretch;
	gap: 20px;
	padding: 0 20px;
`

export const EducationSection = styled.div`
	display:flex;
	flex-direction:column;
	align-items:stretch;
	gap: 32px;
`

export const FormInput = styled.input`
	font-size:2rem;
	padding: 5px 10px;
	width:100%;
	box-sizing:border-box;
`

export const TextArea = styled.textarea`
	font-size:2rem;
`

export const FormH1 = styled.h1`
  text-align:left;
	margin:0
`

export const FormH2 = styled.h2`
  text-align:left;
	margin:0;
`

export const UploadButton = styled.div`
  position:relative;
  background-color: white;
  padding: 5px;
  border:1px solid gray;
  border-radius: 5px;
  cursor: pointer;
	display:flex;
	justify-content: space-between;
	
`

export const UploadInput = styled.input`
  margin:0;
  width:100%;
  cursor: pointer;
	opacity: 0;
  background: transparent;
	border:1px solid red;
	padding: 5px 20px;

`

export const UploadLabel = styled.label`
	display:flex;
	align-items:center;
  position: absolute;
  cursor: pointer;
  font-size: 1.5rem;
  top:-2%;
  margin:0;
  pointer-events: none;
  font-weight: bold;
	height:100%;
`

export const SaveButton = styled.button`
  padding: 10px;
  font-size: 1.5rem;
  background-color:#1DA1F2;
  border:none;
  border-radius: 5px;
  color:white;
  font-weight:bold;
  cursor:pointer;
  width:95%;
  margin:auto;
`