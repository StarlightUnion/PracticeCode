// Session: 2016.11
// decorator模式 Created by wxc on 2019/10/23

import java.util.*;

class Invoice {
    public void printInvoice() {
        System.out.println("This is the content of the invoice!");
    }
}

class Decorator extends Invoice {
    protected Invoice ticket;
    public Decorator(Invoice t) {
        ticket = t;
    }
    public void printInvoice() {
        if(ticket != null) {
            // 1
            ticket.printInvoice();
        }
    }
}

class HeadDecorator extends Decorator {
    public HeadDecorator(Invoice t) {
        super(t);
    }
    public void printInvoice() {
         System.out.println("This is the header of the invoice!");
        //  2
        super.printInvoice();
    }
}

class FootDecorator extends Decorator {
    public FootDecorator (Invoice t) {
        super(t);
    }

    public void printInvoice() {
        // 3
        super.printInvoice();

        System.out.println("This is the footnote of the invoice!");
    }
}

class Test16_11 {
    public static void main(String[] args) {
        Invoice t = new Invoice();
        Invoice ticket;
        // 4
        ticket = new HeadDecorator(new FootDecorator(t));

        ticket.printInvoice();
        System.out.println("------------------------------");
        // 5
        ticket = new HeadDecorator(new FootDecorator(null));

        ticket.printInvoice();
    }
}