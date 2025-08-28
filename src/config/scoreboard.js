export const columns = [
  { key: 'idx', title: '#', width: 32, align: 'right' },
  { key: 'agent', title: 'Agent', width: 170, align: 'left' },
  { key: 'amount1', title: 'Amount', width: 80, align: 'right' },
  { key: 'daily', title: 'Daily', width: 120, align: 'right' },
  { key: 'amount2', title: 'Amount', width: 80, align: 'right' },
  { key: 'weekly', title: 'Weekly', width: 120, align: 'right' },
  { key: 'amount3', title: 'Amount', width: 80, align: 'right' },
  { key: 'monthly', title: 'Monthly', width: 140, align: 'right' },
  { key: 'goal', title: 'Goal', width: 80, align: 'right' },
]

const r = (i,a)=>({ idx:i+1, agent:a, amount1:i?'-':'1', daily:i?'$0.00':'$222.00', amount2:'0', weekly:'$0.00', amount3:[13,4,4,8,3,1,1][i]??'-', monthly:['$2,033,404.90','$1,010,002.00','$60,764.40','$41,652.81','$4,500.00','$400.00','$200.00'][i]??'-', goal:'—' })

export const rowsByTab = {
  Sales: [ r(0,'Admin Admin'), r(1,'Lia Delough'), r(2,'Pine Apple'), r(3,'Jeff Jonson'), r(4,'Freya Admin'), r(5,'Olivia Agent'), r(6,'Jane Test') ],
  Retention: [ r(0,'Admin Admin'), r(1,'Lia Delough'), r(2,'Pine Apple') ],
}

export const totals = { idx:'Totals', amount1:'1', daily:'$222.00', amount2:'0', weekly:'$0.00', amount3:'34', monthly:'$3,150,502.11', goal:'—' }
