import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { SideBarItem } from '.';
import { setActiveNote } from '../../store/journal';

export const SideBar = ({ drawerWidth = 240 }) => {
    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);
    const dispatch = useDispatch();

    const handleNoteClick = (note) => {
        dispatch(setActiveNote(note));
    }

    return (
        <Box
            component="nav"
            sx={ { width: { sm: drawerWidth }, flexShrink: { sm: 0 } } }
        >
            <Drawer
                variant="permanent"
                open
                sx={ {
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                } }
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        { displayName }
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        notes.map(note => (
                            <SideBarItem key={note.id} {...note} setActive={() => handleNoteClick(note)}/>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
