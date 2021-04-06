import Link, { LinkProps } from "next/link";
//Esse link serve para nao ter que carregar a pagina inteira com todos os dados novamente, aproveita a page anterior e carrega somente o necessario
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";
//cloneElement = voce clona o elemento(nesse caso, o CHILDREN) e consegue modificar coisas nele 

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({children, activeClassName, ...rest}: ActiveLinkProps) {
    const { asPath } = useRouter()

    const className = asPath === rest.href ? activeClassName : '';

    return (
        <Link {...rest}>
            {cloneElement(children, {
                className,
            })}
        </Link>
    )
}