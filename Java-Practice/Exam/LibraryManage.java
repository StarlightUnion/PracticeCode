// Session: 2015.05
// visitor模式 Created by wxc on 2019/10/24

import java.util.*;

interface LibraryVisitor {
    // 1
    void visit(Book p_book);
    // 2
    void visit(Article p_article);

    void printSum();
}

class LibrarySumPrintVisitor implements LibraryVisitor {
    // 打印总页数
    private int sum = 0;
    public void visit(Book p_book) {
        sum = sum + p_book.getNumberOfPages();
    }

    public void visit(Article p_article) {
        sum = sum + p_article.getNumberOfPages();
    }

    public void printSum() {
        System.out.println("SUM =" + sum);
    }
}

interface LibraryItemInterface {
    // 3
    void accept(LibraryVisitor visitor);// *
}

class Article implements LibraryItemInterface {
    private String m_title;// 论文名
    private String m_author;// 论文作者
    private int m_start_page;
    private int m_end_page;
    public Article(String p_author, String p_title, int p_start_page, int p_end_page) {
        m_title = p_title;
        m_author = p_author;
        m_end_page = p_end_page;
    }

    public int getNumberOfPages() {
        return m_end_page - m_start_page;
    }

    public void accept(LibraryVisitor visitor) {
        // 4
        visitor.visit(this);
    }
}

class Book implements LibraryItemInterface {
    private String m_title;// 书名
    private String m_author;// 书作者
    private int m_pager;// 页数
    public Book(String p_author, String p_title, int p_pages) {
        m_title = p_title;
        m_author = p_author;
        m_pages = p_pages;
    }

    public int getNumberOfPages() {
        return m_pages;
    }

    public void accept(LibraryVisitor visitor) {
        // 5
        visitor.visit(this);
    }
}