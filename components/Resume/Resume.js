import React from 'react'
import classnames from 'classnames'
import { Heading, Strata, Wrapper } from 'Components'
import styles from './styles.css'

const Resume = ({ name, lead, contactInfo, experience }) => (
  <Strata id='resume' className={styles.root}>
    <Wrapper className={classnames(styles.wrapper, 'u-rhythm--lg')}>
      <Heading level='h1'>{name}</Heading>

      <p>{lead}</p>

      <ul className={styles.contact}>
        {
          contactInfo.map(contact => (
            <li key={contact.contents}>
              <a href={contact.href}>{contact.contents}</a>
            </li>
          ))
        }
      </ul>

      <Heading className={styles.work} level='h2'>Work Experience</Heading>

      <div className={styles.experience}>
        {
          experience.map(work => (
            <div key={work.slug} id={work.slug} className={classnames(styles.workItem)}>
              <p className={styles.date}>
                {work.start} &ndash; {work.end}
                { work.contract &&
                  <span className={styles.contract}>Contract</span>
                }
              </p>
              <Heading tagName="h3" level='h4'>
                { work.website
                  ? <a className={styles.website} href={work.website} target='_blank'>{work.company}</a>
                  : <span>work.company</span>
                } &ndash; {work.title}
              </Heading>

              { work.details &&
                <ul className={styles.details}>
                  {
                    work.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))
                  }
                </ul>
              }

              { work.technologies &&
                <div className={classnames(styles.linkList, styles.technologies)}>
                  <em>Technologies:</em>

                  {
                    work.technologies.map((row) => (
                      <span key={row.contents}>

                        { row.href !== undefined
                          ? <a href={row.href}>{row.contents}</a>
                          : <React.Fragment>{row.contents}</React.Fragment>
                        }
                      </span>
                    ))
                  }
                </div>
              }

              { work.integrations &&
                <div className={classnames(styles.linkList, styles.integrations)}>
                  <em>Integrations:</em>

                  {
                    work.integrations.map((row) => (
                      <span key={row.contents}>
                        { row.href !== undefined
                          ? <a href={row.href}>{row.contents}</a>
                          : <React.Fragment>{row.contents}</React.Fragment>
                        }
                      </span>
                    ))
                  }
                </div>
              }

              { work.applications &&
                <div className={classnames(styles.linkList, styles.applications)}>
                  <em>Applications:</em>

                  {
                    work.applications.map((row) => (
                      <span key={row.contents}>
                        {
                          row.href !== undefined
                            ? <a href={row.href}>{row.contents}</a>
                            : <React.Fragment>{row.contents}</React.Fragment>
                        }
                      </span>
                    ))
                  }
                </div>
              }
            </div>
          ))
        }
      </div>
    </Wrapper>
  </Strata>
)

export default Resume
