type IconLinkProps = {
    href: string;
    hidden?: boolean;
    children: React.ReactNode;
}

const IconLink = ({ href, hidden = false, children }: IconLinkProps) => {
    return(
        <a 
            href={href} 
            target='_blank' 
            rel="noopener noreferrer"
            className={`hover:transform hover:scale-110 transition-all duration-250 ease-in-out ${hidden ? 'hidden' : ''}`}
        >
            {children}
        </a>
        
    )
}

export default IconLink;