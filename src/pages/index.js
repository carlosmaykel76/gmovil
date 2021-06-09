import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import useStyles from '../components/styles'
import rows from '../data/data'


const columns = [  
    { field: 'movil', headerName: 'Movil', flex: 0.6 },
    { field: 'responsable', headerName: 'Responsable', flex: 1.5, resizable: false},
    { field: 'cargo', headerName: 'Cargo', flex: 2.2 },
    { field: 'plan', headerName: 'Plan', flex: 1 },
    { field: 'llamadas', headerName: 'Llamadas', flex: 0.8 },
    { field: 'sms', headerName: 'SMS', flex: 0.6 },
    { field: 'apn', headerName: 'APN', flex: 0.6},
    { field: 'internet', headerName: 'Navegacion', type: 'boolean', flex: 1},
  ];

const Home = () => {
    const classes = useStyles;

    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12}>
                    <Paper>
                        <div style={{ height: 500, width: '100%' }}>
                            <DataGrid rows={rows} columns={columns} pageSize={6} checkboxSelection disableColumnMenu disableMultipleSelection />    
                        </div>                
                    </Paper>
                </Grid>
            </Grid>
        </div>   
    );
}


export default Home