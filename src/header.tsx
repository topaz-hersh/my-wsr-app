import type React from 'react';
import { st, classes } from './header.st.css';
// import stylableLogo from './stylable.svg';

export interface HeaderProps {
    className?: string;
}

export const Header: React.VFC<HeaderProps> = ({ className }) => {

    return (
        <header className={st(classes.root, className)}>
            <h1 className={classes.title}>
                My Gallery
            </h1>
        </header>
    );
};
