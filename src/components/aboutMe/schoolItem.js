import React from 'react'
import * as css from './schoolItem.module.scss'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {School} from '@material-ui/icons'
import Typography from '@material-ui/core/Typography';

const SchoolItem = props => {
  return (
      <List className={css.list}>
          {props.items.map(item => {
             return ( <ListItem alignItems="flex-start" key={item.title.toString()}>
                  <ListItemAvatar>
                      <School fontSize={"large"}/>
                  </ListItemAvatar>
                  <ListItemText
                      primary={item.title}
                      secondary={
                          <React.Fragment>
                              <Typography component="div" className={css.inline} color="textPrimary">
                                  {item.year}
                              </Typography>
                              {item.desc}
                          </React.Fragment>
                      }
                  />
              </ListItem> )
          })}
      </List>
  )
};

export default SchoolItem;