// import * as React from "react"
// import Ripples from "react-ripples"
// import { MdMoreVert } from "react-icons/md"

// interface Props {
//   openModelHandler: () => void
//   date: string
//   name: string
//   description: string
//   price: string
// }
// const propsAreEqual = (prevProps: any, nextProps: any) => {
//   return prevProps.id === nextProps.id && prevProps.date === nextProps.date
// }

// export const dateCompare = (date: string | false) => {
//   if (date) return new Date(date).toLocaleDateString()
//   return new Date().toLocaleDateString()
// }

// export const Item: React.FC<Props> = React.memo(
//   ({ date, name, description, price, openModelHandler }) => {
//     return (
//       <>
//         <td className="lists__date">
//           {dateCompare(date) === dateCompare(false)
//             ? new Date(date).toLocaleTimeString()
//             : new Date(date).toLocaleString()}
//         </td>
//         <td className="lists__title">{name}</td>
//         <td className="lists__description">{description}</td>
//         <td className="lists__price">{price} PKR</td>

//         <td className="lists__action">
//           <div className="lists__dots">
//             <Ripples>
//               <MdMoreVert onClick={openModelHandler} />
//             </Ripples>
//           </div>
//         </td>
//       </>
//     )
//   },
//   propsAreEqual
// )
