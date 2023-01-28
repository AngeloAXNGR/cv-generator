import styled from "styled-components";

export const PreviewWrapper = styled.div`
 margin:0 auto;
	width:816px;
	height:1056px;
	box-shadow: 0 0 3px rgba(0,0,0,0.5);
	display:flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	box-shadow: 0 0 3px rgba(0,0,0,0.5);
	position:sticky;
	top:0;
	`

export const PreviewHeader = styled.div`
  background-color:#1E1E1E;
  margin:0 auto;
  color:white;
  text-align: center;
  padding: 20px 0;
	width:100%;
`

export const PreviewMain = styled.main`
	display:flex;
	height:100%;
`

export const ProfileSection = styled.div`
  flex: 0 0 204px;
  padding: 0 20px;
  background-color: #D9D9D9;
  height:100%;
  display:flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-wrap: break-word; 
`

export const ProfileImage = styled.img`
  border-radius: 150px;
  object-fit: cover;
  width: 150px;
  height: 150px;
`

export const ProfileSummary = styled.div`
  display:flex;
  flex-direction: column;
  gap:20px;
`

export const ContactInformation = styled.div`
  display:flex;
  flex-direction: column;
  gap:20px;
`

export const PreviewH3 = styled.h3`
  margin:0;
`

export const PreviewPara = styled.p`
  margin:0;
`

export const QualificationSummary = styled.div`
  padding: 0 30px;
  display:flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  overflow-wrap: break-word; 
  > div + div{
    border-top: 2px solid gray;
  }
`

export const EducationContent = styled.div`
  > div + div{
    border-top:1px solid lightgray;
  }
`

export const PreviewUL=  styled.ul`
  columns:2;
  column-gap: 10%;
`