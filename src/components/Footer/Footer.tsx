import cl from './Footer.module.scss';
import { socials } from './Footer.const';
import Image from 'next/image';
import { FC } from 'react';
import classNames from 'classnames';

interface IFooter {
  absolute?: boolean;
  className?: string;
}

const Footer: FC<IFooter> = ({ absolute = false, className }) => {
  return (
    <footer
      id={'footer'}
      data-absolute={absolute}
      className={classNames(cl.footer, className)}
    >
      <div className={cl.container}>
        <div className={cl.socialsContainer}>
          <a className={cl.emailLink} href={'mailto:hello@refleep.com'}>
            hello@refleep.com
          </a>
          <div className={cl.socials}>
            {socials.map((social, key) => (
              <a
                className={cl.socialLink}
                key={key}
                href={social.href}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <Image src={social.src} alt={social.alt} />
              </a>
            ))}
          </div>
        </div>
        <hr />
        <div className={cl.copyrightContainer}>
          <span className={cl.copyrightText}>
            © 2023 refleep — Design Studio, Dubai, UAE
          </span>
          <span className={cl.termsAndPrivacy}>Terms and Privacy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
