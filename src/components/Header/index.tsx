import { SignInButton } from '../SignInButton';
import Link from 'next/link';
//Esse link serve para nao ter que carregar a pagina inteira com todos os dados novamente, aproveita a page anterior e carrega somente o necessario

import styles from './styles.module.scss';

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news"/>
                <nav>
                    <Link href="/">
                        <a className={styles.active}>Home</a>
                    </Link>
                    <Link href="/posts">
                        <a>Posts</a>
                    </Link>
                </nav>

                <SignInButton />
            </div>
        </header>
    );
}