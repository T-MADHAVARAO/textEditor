import styled from 'styled-components'

export const Edit = styled.textarea`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  background-color: transparent;
  border: 0px;
  color: white;
`

export const Icon = styled.button`
  color: ${props => (props.val ? '#faff00' : '#f1f5f9')};
`
