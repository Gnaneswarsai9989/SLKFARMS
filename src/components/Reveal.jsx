import useScrollReveal from '../hooks/useScrollReveal.js'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useScrollReveal()
  const delayClass = delay ? ` d${delay}` : ''
  return (
    <Tag ref={ref} className={`reveal${delayClass} ${className}${visible ? ' is-visible' : ''}`} {...rest}>
      {children}
    </Tag>
  )
}
