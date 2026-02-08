// import React from 'react'

type Props = {
  valueName: string,
  name: string,
  // onChangeFun: (e: React.MouseEvent) => void;
  defaultValue: string,
  setFunction: (v: string)=> void,
  style: string
}

export default function Input({
  name,
  style,
  defaultValue,
  valueName,
  // onChangeFun,
  setFunction
  }: Props) {
  return (
    <input 
      value={name} 
      onChange={(e) => setFunction(e.target.value)} 
      name={valueName} 
      defaultValue={defaultValue} 
      className={style} />
  )
}