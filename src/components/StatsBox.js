import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export const StatsBox = ({ stats }) => (
  <div>
    <Table selectable={false}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
            <TableHeaderColumn style={{textAlign: 'center', fontSize: 15}}>
              Base Stats
            </TableHeaderColumn>
         </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} style={{fontSize: 14}}>
        <TableRow key={0}>
          <TableRowColumn>HP</TableRowColumn>
          <TableRowColumn>{stats.HP}</TableRowColumn>
          <TableRowColumn>Speed</TableRowColumn>
          <TableRowColumn>{stats.SPEED}</TableRowColumn>
        </TableRow>
        <TableRow key={1}>
          <TableRowColumn>Attack</TableRowColumn>
          <TableRowColumn>{stats.ATTACK}</TableRowColumn>
          <TableRowColumn>Defense</TableRowColumn>
          <TableRowColumn>{stats.DEFENSE}</TableRowColumn>
        </TableRow>
        <TableRow key={2}>
          <TableRowColumn>Special Attack</TableRowColumn>
          <TableRowColumn>{stats.SPECIAL_ATTACK}</TableRowColumn>
          <TableRowColumn>Special Defense</TableRowColumn>
          <TableRowColumn>{stats.SPECIAL_DEFENSE}</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);
