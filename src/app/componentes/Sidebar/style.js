import styled from 'styled-components'

export const Container = styled.div`
  background-color: #0A5517;
  padding-top: 20px;
  padding-left: 20px;
  position: fixed;
  border-right: 1px solid black;
  height: 100vh;
  top: 0px;
  left: 0px;
  width: 300px;
  border-radius: 15px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  z-index: 1;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar{
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }          
`;

export const Conteudo = styled.div`
  margin-top:20px;
`;