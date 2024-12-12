import $ from 'jquery';

import { Page } from '@/components/Page/Page';
import { Link } from '@/components/Link/Link';
import { routes } from '@/navigation/routes';
import type { AppContext } from '@/context/types';

import './styles.css';

export class HomePage {
  private readonly page: Page;

  constructor(context: AppContext) {
    this.page = new Page({ title: '' }).appendChild(
      $('<a href="http://185.251.90.61:3939/learnAuth?login=true">Войти</a>'),
      $('<ul class="index-page__links"/>').append(
        ...routes.reduce<JQuery<HTMLLIElement>[]>((acc, r) => {
          if (r.title) {
            acc.push(
              $<HTMLLIElement>('<li class="index-page__link-item"/>').append(
                new Link({ class: 'index-page__link', href: r.pathname }, context)
                  .appendChild(
                    r.icon && $('<i class="index-page__link-icon"/>').append(
                      $('<img/>').attr('src', r.icon),
                    ),
                    r.title,
                  )
                  .element(),
              ),
            );
          }
          return acc;
        }, []),
      ),
    );
  }

  render(root: HTMLElement) {
    $(root).empty().append(this.page.element());
  }
}