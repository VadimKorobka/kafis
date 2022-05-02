import React from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <section className={styles["header-feed"]}>
        <div className={styles["container"]}>
          <div className={styles["header-feed__container"]}>
            <div className={styles["header-feed__left"]}>
              <a href="/" className={styles["header-feed__logo"]}>
                <img src="/images/logo.svg" alt="logo" />
              </a>
            </div>
            <div className={styles["header-feed__right"]}>
              <div className={styles["header-feed__contacts"]}>
                <div className={styles["header-feed__contacts-item"]}>
                  <img
                    src="/icons/phone-call.svg"
                    className={styles["header-feed__icon"]}
                    alt="phone-call"
                  />
                  <a href="tel:+380577021831">+ 38 (057) 702-18-31</a>
                </div>
                <div className={styles["header-feed__contacts-item"]}>
                  <img
                    src="/icons/mail.svg"
                    className={styles["header-feed__icon"]}
                    alt="phone-call"
                  />
                  <a href="mailto:kafis@hneu.edu.ua">kafis@hneu.edu.ua</a>
                </div>
              </div>
              <div className={styles["header-feed__social"]}>
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="/icons/social/instagram.svg"
                        className={styles["header-feed__icon"]}
                        alt="instagram"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/icons/social/facebook.svg"
                        className={styles["header-feed__icon"]}
                        alt="facebook"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/icons/social/youtube.svg"
                        className={styles["header-feed__icon"]}
                        alt="youtube"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/icons/social/telegram.svg"
                        className={styles["header-feed__icon"]}
                        alt="telegram"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles["header-feed__language"]}>
                <img
                  src="/icons/world-icon.svg"
                  className={styles["header-feed__icon"]}
                  alt="world"
                />
                <span>UKR</span>
                <img src="/icons/caret-down.svg" alt="caret-down" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["header-nav"]}>
        <div className={styles["container"]}>
          <div className={styles["header-nav__container"]}>
            <div className={styles["header-nav__menu"]}>
              <div className={styles["menu"]}>
                <div className={styles["menu__substrate"]}></div>
                <div className={styles["menu__items-container"]}>
                  <ul className={styles["menu__items"]}>
                    <li className={styles["menu__link"]}>
                      <a href="index.html">Головна</a>
                    </li>
                    <li
                      className={cn(styles["menu__link"], styles["dropdown"])}
                    >
                      <a href="#" className={styles["dropdown-link"]}>
                        <span>Навчання</span>
                        <span className={styles["menu__link-mobile-arrow"]}>
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                d="M7.8497 5.00003C7.8497 5.17925 7.78127 5.35845 7.6447 5.49508L3.34488 9.79486C3.07135 10.0684 2.62788 10.0684 2.35447 9.79486C2.08106 9.52145 2.08106 9.07807 2.35447 8.80452L6.15919 5.00003L2.35461 1.19551C2.08119 0.921988 2.08119 0.478652 2.35461 0.205263C2.62802 -0.0683908 3.07149 -0.0683908 3.34501 0.205263L7.64483 4.50497C7.78143 4.64168 7.8497 4.82087 7.8497 5.00003Z"
                                fill="#474747"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                  transform="translate(0 10) rotate(-90)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </a>
                      <ul className={styles["dropdown-content"]}>
                        <li
                          className={cn(
                            styles["dropdown"],
                            styles["dropdown-item"],
                            styles["menu__link"]
                          )}
                        >
                          <a
                            href="specialties-description.html"
                            className={styles["dropdown-link"]}
                          >
                            <span>Спеціальності</span>
                          </a>
                        </li>

                        <li
                          className={cn(
                            styles["dropdown"],
                            styles["dropdown-item"],
                            styles["menu__link"]
                          )}
                        >
                          <a
                            href="quality-of-education.html"
                            className={styles["dropdown-link"]}
                          >
                            <span>Якість навчання</span>
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0)">
                                <path
                                  d="M7.8497 5.00003C7.8497 5.17925 7.78127 5.35845 7.6447 5.49508L3.34488 9.79486C3.07135 10.0684 2.62788 10.0684 2.35447 9.79486C2.08106 9.52145 2.08106 9.07807 2.35447 8.80452L6.15919 5.00003L2.35461 1.19551C2.08119 0.921988 2.08119 0.478652 2.35461 0.205263C2.62802 -0.0683908 3.07149 -0.0683908 3.34501 0.205263L7.64483 4.50497C7.78143 4.64168 7.8497 4.82087 7.8497 5.00003Z"
                                  fill="#474747"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0">
                                  <rect
                                    width="10"
                                    height="10"
                                    fill="white"
                                    transform="translate(0 10) rotate(-90)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                          <ul
                            className={cn(
                              styles["dropdown-content"],
                              styles["submenu"]
                            )}
                          >
                            <li
                              className={cn(
                                styles["dropdown-item"],
                                styles["menu__link"]
                              )}
                            >
                              <a href="quality-of-education.html">Відгуки</a>
                            </li>
                            <li
                              className={cn(
                                styles["dropdown-item"],
                                styles["menu__link"]
                              )}
                            >
                              <a href="quality-of-education.html">Рецензії</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className={styles["menu__link"]}>
                      <a href="teachers.html">Викладачі</a>
                    </li>
                    <li className={styles["menu__link"]}>
                      <a href="news.html">Новини та події</a>
                    </li>
                    <li
                      className={cn(styles["menu__link"], styles["dropdown"])}
                    >
                      <a href="#" className={styles["dropdown-link"]}>
                        <span>Партнерство</span>
                        <span className={styles["menu__link-mobile-arrow"]}>
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                d="M7.8497 5.00003C7.8497 5.17925 7.78127 5.35845 7.6447 5.49508L3.34488 9.79486C3.07135 10.0684 2.62788 10.0684 2.35447 9.79486C2.08106 9.52145 2.08106 9.07807 2.35447 8.80452L6.15919 5.00003L2.35461 1.19551C2.08119 0.921988 2.08119 0.478652 2.35461 0.205263C2.62802 -0.0683908 3.07149 -0.0683908 3.34501 0.205263L7.64483 4.50497C7.78143 4.64168 7.8497 4.82087 7.8497 5.00003Z"
                                fill="#474747"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect
                                  width="10"
                                  height="10"
                                  fill="white"
                                  transform="translate(0 10) rotate(-90)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </a>
                      <ul className={styles["dropdown-content"]}>
                        <li
                          className={cn(
                            styles["dropdown-item"],
                            styles["menu__link"]
                          )}
                        >
                          <a href="#" className={styles["dropdown-link"]}>
                            IT бізнес
                          </a>
                        </li>
                        <li
                          className={cn(
                            styles["dropdown-item"],
                            styles["menu__link"],
                            styles["dropdown"]
                          )}
                        >
                          <a href="#" className={styles["dropdown-link"]}>
                            <span>Міжнародне</span>
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0)">
                                <path
                                  d="M7.8497 5.00003C7.8497 5.17925 7.78127 5.35845 7.6447 5.49508L3.34488 9.79486C3.07135 10.0684 2.62788 10.0684 2.35447 9.79486C2.08106 9.52145 2.08106 9.07807 2.35447 8.80452L6.15919 5.00003L2.35461 1.19551C2.08119 0.921988 2.08119 0.478652 2.35461 0.205263C2.62802 -0.0683908 3.07149 -0.0683908 3.34501 0.205263L7.64483 4.50497C7.78143 4.64168 7.8497 4.82087 7.8497 5.00003Z"
                                  fill="#474747"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0">
                                  <rect
                                    width="10"
                                    height="10"
                                    fill="white"
                                    transform="translate(0 10) rotate(-90)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                          <ul
                            className={cn(
                              styles["dropdown-content"],
                              styles["submenu"]
                            )}
                          >
                            <li
                              className={cn(
                                styles["dropdown-item"],
                                styles["menu__link"]
                              )}
                            >
                              <a href="#">IBM</a>
                            </li>
                            <li
                              className={cn(
                                styles["dropdown-item"],
                                styles["menu__link"]
                              )}
                            >
                              <a href="#">Erasmus+MASTIS</a>
                            </li>
                            <li
                              className={cn(
                                styles["dropdown-item"],
                                styles["menu__link"]
                              )}
                            >
                              <a href="#">Erasmus+DocHUB</a>
                            </li>
                            <li
                              className={cn(
                                styles["dropdown-item"],
                                styles["menu__link"]
                              )}
                            >
                              <a href="#">Erasmus+FABLAB</a>
                            </li>
                            <li
                              className={cn(
                                styles["dropdown-item"],
                                styles["menu__link"]
                              )}
                            >
                              <a href="#">Horizon 2020 EQUAL-IST</a>
                            </li>
                            <li
                              className={cn(
                                styles["dropdown-item"],
                                styles["menu__link"]
                              )}
                            >
                              <a href="#">C3QA Erasmus+</a>
                            </li>
                            <li
                              className={cn(
                                styles["dropdown-item"],
                                styles["menu__link"]
                              )}
                            >
                              <a href="#">EDUQUAS</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className={styles["menu__link"]}>
                      <a href="#footer">Контакти</a>
                    </li>
                  </ul>
                  <div className={styles["menu__hamburger"]}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["header-nav__search"]}>
              <a href="#">
                <img src="/icons/search.svg" alt="search" />
                <span>Пошук</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default React.memo(Header);
