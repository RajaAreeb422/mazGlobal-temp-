import styled from 'styled-components';

export const Box = styled.div`
padding: 10px 0px;
background: whitesmoke;
bottom: 0;
width: 100%;



@media (max-width: 760px) {
	background:white ;
	padding:0px ;
	
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	// max-width: 1000px;
	margin: 0 auto;
	padding-top:20px;
	padding-bottom:40px;
	
@media (max-width: 700px) {
	display:none;
	
}
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
// margin-left: -230px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(285px, 1fr));
grid-gap: 60px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
// margin-bottom: 20px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
color: rgba(16, 103, 138, 0.933);
text-decoration: none;
margin-left:40px;
font-weight:700;
font-size:18px;
`;
