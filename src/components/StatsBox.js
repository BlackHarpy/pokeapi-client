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
            <TableHeaderColumn style={{textAlign: 'center'}}>
              Base Stats
            </TableHeaderColumn>
         </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow key={0}>
          <TableRowColumn>HP</TableRowColumn>
          <TableRowColumn>{stats.HP}</TableRowColumn>
        </TableRow>
        <TableRow key={1}>
          <TableRowColumn>Attack</TableRowColumn>
          <TableRowColumn>{stats.ATTACK}</TableRowColumn>
        </TableRow>
        <TableRow key={2}>
          <TableRowColumn>Defense</TableRowColumn>
          <TableRowColumn>{stats.DEFENSE}</TableRowColumn>
        </TableRow>
        <TableRow key={3}>
          <TableRowColumn>Special Attack</TableRowColumn>
          <TableRowColumn>{stats.SPECIAL_ATTACK}</TableRowColumn>
        </TableRow>
        <TableRow key={4}>
          <TableRowColumn>Special Defense</TableRowColumn>
          <TableRowColumn>{stats.SPECIAL_DEFENSE}</TableRowColumn>
        </TableRow>
        <TableRow key={5}>
          <TableRowColumn>Speed</TableRowColumn>
          <TableRowColumn>{stats.SPEED}</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);
