
export default function Button({ classes, children, ...props }) {
  return <button className={`${classes} inline-block rounded-3xl px-6 py-2 text-white text-base font-medium`} {...props}>{children}</button>
}
