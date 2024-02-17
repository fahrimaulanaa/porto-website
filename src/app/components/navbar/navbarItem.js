export default function NavItem({ href, isActive, children }) {
    return (
      <li>
        <a
          href={href}
          className={`flex items-center justify-center px-3 py-2 rounded-md ${isActive ? 'text-white' : 'text-gray-300'}`}
        >
          {children}
        </a>
      </li>
    )
  }